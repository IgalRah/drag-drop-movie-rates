// Working with constrains
// const names = ["Igal", "Maia"];
// const stringArray: Array<string> = ["string only"];
// const numberArray: Array<number> = [1];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Time is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// ------------------------------------------------------------------------ \\
// Generic functions
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: "Igal", hobbies: ["Sports"] }, { age: 25 });
const mergeObj2 = merge({ name: "Maia", hobbies: ["Art"] }, { age: 23 });

console.log(mergeObj);
console.log(mergeObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));

// ------------------------------------------------------------------------ \\
// The 'keyof' Constrains
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ Name: "Igal" }, "Name"));

// ------------------------------------------------------------------------ \\
// Generic classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Igal");
textStorage.addItem("Toys");
textStorage.addItem("Cars");
textStorage.removeItem("Igal");
// ..
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.removeItem(2);
// ..
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const IgalObj = { name: "Igal" };
// objStorage.addItem(IgalObj);
// objStorage.addItem({ name: "Maia" });
// // ..
// objStorage.removeItem(IgalObj);
// console.log(objStorage.getItems());

// ------------------------------------------------------------------------ \\

// Bonus: Generic utility types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
  }
}

const names: Readonly<string[]> = ["Igal", "Maia"];
// names.push("Tar");
// names.pop()
