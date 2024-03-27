type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const firstEmployee: ElevatedEmployee = {
  name: "Igal",
  privileges: ["create-server", "create-users"],
  startDate: new Date(),
};
console.log(firstEmployee);

// ---------------------------------------------------------------------------------------------------------------------------------- \\

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const resultNum = add(5, 5);
resultNum.toString();
console.log(resultNum);

const resultString = add("foo", "bar");
resultString.split(" ");
console.log(resultString);

// Optional chaining
const fetchedUserData = {
  id: "U1",
  name: "Igal",
  job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = undefined;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}

const secondEmployee: UnknownEmployee = {
  name: "Maia",
  privileges: ["create-server", "create-user"],
  startDate: new Date(),
};
console.log(secondEmployee);

printEmployeeInformation(firstEmployee);
printEmployeeInformation(secondEmployee);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving");
  }

  loadCargo(amount: number) {
    console.log(`Load cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const firstVehicle = new Car();
const SecondVehicle = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(555);
  }
}

useVehicle(firstVehicle);
useVehicle(SecondVehicle);

// ---------------------------------------------------------------------------------------------------------------------------------- \\

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      console.log(`Flying at the speed of ${speed}`);
      break;
    case "horse":
      speed = animal.runningSpeed;
      console.log(`Running at the speed of ${speed}`);
      break;
  }
}

movingAnimal({ type: "bird", flyingSpeed: 48 });
movingAnimal({ type: "horse", runningSpeed: 50 });
