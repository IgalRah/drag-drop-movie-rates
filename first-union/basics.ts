const addTwoNumbers = (n1: number, n2: number, showResult: boolean) => {
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Incorrect input!");
  //   }
  if (showResult) {
    console.log(`Results is: ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
};

const firstNumber = 5;
const secondNumber = 2.8;
const printResult = true;

addTwoNumbers(firstNumber, secondNumber, printResult);
