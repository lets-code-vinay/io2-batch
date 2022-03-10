/**
 * 12. Write a program to find the absolute value of a number entered through the keyboard
 */

const num = prompt("Enter any number:");
// Nested Ifs

if (num >= 0 || num <= 0) {
  console.log(num, "is a valid number");

  if (num == 0) {
    console.log("This is zero and zero has no absolute value");
  }

  if (num > 0) {
    console.log("The absolute value of ", num, "is", num * 1);
  }

  if (num < 0) {
    console.log("The absolute value of ", num, "is", num * -1);
  }
} else {
  console.log(num, "is not a valid number");
}

// condition chaining

// if( num == 0){
//   console.log('THis zero and zero has no absolute value')
// }
// else if(num > 0){
//   console.log("The absolute value of ", num, "is", num * 1 )
// }
// else if(num < 0){
//  console.log("The absolute value of ", num, "is", num * -1 )
// } else{
//   console.log(num , " is not a valid number" )
// }
