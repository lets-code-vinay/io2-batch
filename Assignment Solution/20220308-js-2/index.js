/**
 * 1.
 * If lenghts of three sides of a triangle are input through the keyboard
 * write a program to find the area of the triangle using Heron's formula
 * Formula:
 *  semi-perimeter = s =(a + b + c)/2
 * Area = √s(s−a)(s−b)(s−c)
 */

const side1 = prompt("Enter side 1:");
const side2 = prompt("Enter side 2:");
const side3 = prompt("Enter side 3:");

const semiperi = (Number(side1) + Number(side2) + Number(side3)) / 2;

const area = Math.sqrt(
  semiperi * (semiperi - side1) * (semiperi - side2) * (semiperi - side3)
);
console.log("Semiperimeter is: ", semiperi + "cm");
console.log("Area of Triangle is: ", area + "cm");
