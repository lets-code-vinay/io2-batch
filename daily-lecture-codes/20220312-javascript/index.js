// //write a program that receiver month and date of birth as input and
// // print the corresponding zodiac sign on the following table
// const m = prompt("type any month with number 1 to 12");
// const d = prompt("type a any date in between 1-31* ");

// // When user enters the wrong date
// if (d < 1 || d > 31) {
//   console.log(d, "is not a valid date", "Kindly Enter a valid date");
// }

// // when user enters the wrong month
// if (m > 12 || m < 1) {
//   console.log(m, "is not a valid month. Kindly Enter a valid month");
// }

// if (m <= 12 && m >= 1 && d >= 1 && d <= 31) {
//   if ((m == 12 && d <= 22) || (m == 1 && d <= 19)) {
//     console.log(m + "/" + d, " is capricorn");
//   } else if ((m == 1 && d >= 20) || (m == 2 && d <= 17)) {
//     console.log(m + "/" + d, "is aquarius");
//   } else if ((m == 2 && d >= 18 && d <= 29) || (m == 3 && d <= 19)) {
//     console.log(m + "/" + d, "is pisces");
//   } else if ((m == 3 && d >= 20) || (m == 4 && d <= 19)) {
//     console.log(m + "/" + d, "is aries");
//   } else if ((m == 4 && d >= 20 && d < 31) || (m == 5 && d <= 20)) {
//     console.log(m + "/" + d, "is taurus");
//   } else if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) {
//     console.log(m + "/" + d, "is gemini");
//   } else if ((m == 6 && d >= 21 && d < 31) || (m == 7 && d <= 22)) {
//     console.log(m + "/" + d, "cancer");
//   } else if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) {
//     console.log(m + "/" + d, "is leo");
//   } else if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) {
//     console.log(m + "/" + d, "is virgo");
//   } else if ((m == 9 && d >= 23 && d < 31) || (m == 10 && d <= 22)) {
//     console.log(m + "/" + d, "is libra");
//   } else if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) {
//     console.log(m + "/" + d, "is scorpio");
//   } else if ((m == 11 && d >= 22 && d < 31) || (m == 12 && d <= 21)) {
//     console.log(m + "/" + d, "is sagittarius");
//   } else {
//     console.log(m + "/" + d, "this is wrong date");
//   }
// }

// conditions
// 1. if-else
//      a.if
//      b.if-else
//      c.condition chaining (if -> if -> if) / (if-else -> if -> if)
//      d.nested if
// 2. Tirnary operator
//      'Ravi' == 'ravi' ? console.log('Hello ravi') : console.log('Bye Ravi')
// 3. Switch

const m = prompt("Enter any month in between Jan-Dec");

switch (m) {
  case "Jan":
    console.log("January");
    break;

  case "Feb":
    console.log("February");
    break;

  case "Mar":
    console.log("March");
    break;

  case "Apr":
    console.log("April");
    break;

  case "May":
    console.log("May");
    break;

  case "Jun":
    console.log("June");
    break;

  case "Jul":
    console.log("July");
    break;

  case "Aug":
    console.log("August");
    break;

  case "Sep":
    console.log("September");
    break;

  case "Oct":
    console.log("October");
    break;

  case "Nov":
    console.log("November");
    break;

  case "Dec":
    console.log("December");
    break;

  default:
    console.log("Not a valid month");
    break;
}
