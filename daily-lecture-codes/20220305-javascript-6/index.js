// Relational/comparison operator
// Logical operators

// Conditions

// console.log("1. ", 10 != "15");
// console.log("2. ", 10 !== 11);
// console.log("3. ", "Kanak" !== "KanaK");
// console.log("4. ", "Kanak" !== "Kanak");
// console.log("5. ", 10 >= 10); // 10 > 10 || 10 == 10
// console.log("6. ", 10 <= 10);

// --> Logical Oerator  -> Compare both values

// &&  ==> AnD
// true && true ==> true
// false && true ==> false
// true && false ==> false
// false && false ==> false

// ||  ===> OR
// true || true ==> true
// false || true ==> true
// true || false ==> true
// false || false ==> false
// BODMAS ==> Bracket off, Divide, multiply, Addition, Subtracts

console.log("7. ", 10 !== 12 && (12 == 12 || 12 === "12"));
//                  true  &&  true       || false
//                   true                ||  false  ==>   true

console.log(
  "8.",
  "Sunday" == "Sunday" || "Monday" == false || (10 <= 5 && 5 + 5 == 10)
);
// true  || false || (false && true)
// true || false ==> true
//
console.log("9.", !true);

// Conditional statement
const isRaining = "it is cloudy day" !== "it is not a cloudy day";

// block {-------}
if (!isRaining) {
  console.log("It is raining");
} else {
  console.log("It is blazing day");
}

// Single line conditions
if (!isRaining) console.log("It is raining");
