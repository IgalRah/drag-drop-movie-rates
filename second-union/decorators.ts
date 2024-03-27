// HTML part:
// <div id="app"></div>
//     <button id="btnMessage">Click me</button>

//     <br /><br />

//     <form id="form">
//       <input type="text" placeholder="Course title" id="title" />
//       <input type="text" placeholder="Course price" id="price" />
//       <button type="submit">Save</button>
//     </form>

// Decorator:
// function Logger(target: Function) {
//   console.log("Logging..");
//   console.log(target);
// }

// Factory Decorator:
function Logger(logString: string) {
  console.log("FACTORY LOGGER");

  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("FACTORY TEMPLATE");

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookElement = document.getElementById(hookId);
        const person = new originalConstructor();
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = person.name;
        }
      }
    };
  };
}

@Logger("Rendering logging")
@WithTemplate("<h1>This text is coming from a decorator</h1>", "app")
class Person {
  name = "Igal";

  constructor() {
    console.log("Creating a person..");
  }
}

const person = new Person();
console.log(person);

// More ways to use Decorators

function Log(target: any, propertyName: string) {
  console.log("PROPERTY DECORATOR!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("ACCESSOR DECORATOR!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("METHOD DECORATOR!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("PARAMETER DECORATOR!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const productOne = new Product("Book one", 10);
const productTwo = new Product("Book two", 100);

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.getElementById("btnMessage")!;
button.addEventListener("click", printer.showMessage);

// --

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.getElementById("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleElement = document.getElementById("title") as HTMLInputElement;
  const priceElement = document.getElementById("price") as HTMLInputElement;

  const title = titleElement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);

  // Optional check to verify that the obj is not empty or negative
  // if (title.length > 0 && price > 1) {
  //   const createdCourse = new Course(title, price);
  //   console.log(createdCourse);
  // }

  // Optional check to verify that the obj is not empty or negative with DECORATORS
  if (!validate(createdCourse)) {
    alert("invalid input!");
    return;
  }
  console.log(createdCourse);
});
