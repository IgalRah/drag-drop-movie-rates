console.log("// Tar's mission");
type arrIsNotEmpty<T> = [T, ...T[]];
const array: arrIsNotEmpty<string> = ["String", "is", "ok"];
console.log(array);

console.log("// Tar's mission 2");

function onlyNumbers(a: number, b: number) {
  return a + b;
}
console.log(onlyNumbers(Number("123"), 5));

console.log("Tar's mission 3");

function errorHandler(input: number) {
  if (input === 0) {
    throw new Error("Number can't be 0");
  } else if (input < 0) {
    throw new RangeError("Number can't be below 0");
  } else if (typeof input === "string") {
    throw new TypeError("Only numbers must br provided");
  }
  console.log("ales is good");
}

try {
  errorHandler(0);
} catch (error) {
  if (error instanceof RangeError) {
    console.log(`RangeError occurred: ${error.message}`);
  } else if (error instanceof TypeError) {
    console.log(`TypeError occurred: ${error.message}`);
  } else if (error instanceof Error) {
    console.log(`Error occurred: ${error.message}`);
  }
}
