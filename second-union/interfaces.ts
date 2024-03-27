// Custom function type ==>
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(5, 5));

// ---------------------------------------------------------------------------------------------------------------------------------- \\

interface Named {
  readonly firstName: string;
  readonly lastName?: string;
  outputName?: string;
}
interface Greetable extends Named, GoodBye {
  greet(phrase: string): void;
}

interface GoodBye extends Named {
  bye(phrase: string): void;
}

class Person implements Named, Greetable, GoodBye {
  firstName: string;
  lastName?: string;

  constructor(fName: string, lName: string, protected age: number) {
    if (lName) {
      this.lastName = lName;
    }
    this.firstName = fName;
  }

  greet(phrase: string) {
    console.log(
      `From the class 'Person' ==> ${phrase} ${this.firstName}, you are ${this.age} YO`
    );
  }
  bye(phrase: string) {
    console.log(`From the class 'Person' ==> ${phrase} ${this.lastName}`);
  }
}

let userOne: Greetable;
userOne = {
  firstName: "Igal",
  lastName: "RaKHmany",
  greet(phrase: string) {
    console.log(`From the interface 'Greetable' ==> ${phrase}`);
  },
  bye(phrase: string) {
    console.log(`From the class 'Person' ==> ${phrase} ${this.lastName}`);
  },
};
userOne.greet("Greetings!");

userOne = new Person("Maia", "Yabo", 23);
console.log(userOne);

userOne.greet("Greetings");
userOne.bye("Goodbye");

const personOne = new Person("Igal", "RaKHmany", 25);
console.log(personOne);

personOne.greet("Greetings");
personOne.bye("Goodbye");
