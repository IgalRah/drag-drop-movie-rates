// const addTwoNumber = (a: number, b: number = 50) => {
//   return a + b;
// };

// const printOutPut = (output: string | number) => {
//   console.log(output);
// };

// const button = document.getElementById("firstButton")!;
// button.addEventListener("click", (event) => console.log(event));

// printOutPut(addTwoNumber(5));

const hobbies = ["Gym", "Coding", "PS5"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  firstName: "Igal",
  age: 25,
};

const robotPerson = { ...person };
console.log(`This is the robot: ${robotPerson}`);

function add(...numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numArray = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
const addNumbers = add(...numArray);
console.log(addNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;
console.log(userName, age, person);
