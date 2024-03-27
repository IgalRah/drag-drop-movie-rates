type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) => {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return `${input1} ${input2}`;
  }
};

const combinedAges = combine(50, 50, "as-number");
console.log(combinedAges);

const combinedNames = combine("Igal", "RaKhmanY", "as-text");
console.log(combinedNames);

const combinedAgeAndText = combine("51", 50, "as-number");
console.log(combinedAgeAndText);
