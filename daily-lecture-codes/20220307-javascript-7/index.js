// Boolean => true false
// Relational/comparison
// Logical operator

console.log("1.", 2 + 2 == "4");
// == value == value // checks only values not datatype
// number == number
console.log("2.", 2 + 2 === "4");
// checks value and datatype
// value == value && datatype == datatype

console.log("3.", 5 + 5 + 5 === "15");
const ravi = 10;
console.log("4.", ravi === "Ravi");

// case sensitive
console.log("5.", "ravi" === "Ravi");

console.log("6.", "ravi" === "Ravi");

console.log("7.", 0 == "0");

//-------------------
// true === 1
// false === 0

console.log("7.", 0 == "0");
console.log("8.", true == "true");
console.log("9.", true === false);

// ! --> Not
// !false == not false ==true
console.log("10.", !true == false);
console.log("11.", 1 === true);

console.log("12.", 10 !== "10");
console.log("13.", 10 > 12); // false
console.log("14.", 11 < 12); // true
console.log("15.", 10 >= 10); //
console.log("16.", 10 <= 10);

// const value = prompt("Enter anything here");
// console.log("9.", typeof value, value + 15);
// console.log("10.", typeof value, Number(value) + 15);

// Comparison operators
//  == compares only value  (5 == 5 -> true), (5 == '5' -> true),  ('Sunil' == 'Sunil' -> true), ('Sunil' == 'sunil' -> false)
//  === compares values and datatype (8 === 8 -> true), (8 === '8' -> false),  ('Sunil' === 'Sunil' -> true), ('Sunil' === 'sunil' -> false)
//  != (not equal to) compares only value  (7 != 7 -> false), (7 != '7' -> true),  ('Sunil' == 'Sunil' -> true), ('Sunil' == 'sunil' -> false)
//  !== (not equal to) compares values and datatype (8 === 8 -> true), (8 === '8' -> false),  ('Sunil' === 'Sunil' -> true), ('Sunil' === 'sunil' -> false)
//  <    Less than  (10 < 5 -> false)
//  >    Greater thann (14  > 5 ->  true) ( 14 > 48 -> false) ( 20 > 0.2 -> true)
//  <=    Less than or equal  (5 <= 5 -> true)
//  >=    Greater than or equal (14  >= 5 ->  true) ( 14 >= 48 -> false) ( 20 >= 21 -> false)
//
