const addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log(`Result: ${num}`);
};

printResult(addNumbers(5, 12));

let combinedValues;
combinedValues = addNumbers;
console.log(combinedValues(5, 5));
