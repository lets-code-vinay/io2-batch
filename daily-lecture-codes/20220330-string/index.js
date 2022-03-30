let myName = "Vinay Maurya";
let myName2 = "RAVI KANAK";

// to check datatype of string use-> typeof
document.write(`</br>Datatype of myName :: ${typeof myName}`);

// to check the length of string use-> .length
document.write(`</br>Length of myName :: ${myName.length}`);

// to make it in uppercase of string use-> .toUpperCase()
document.write(`</br>Uppercase of myName :: ${myName.toUpperCase()}`);

// to make it in lowecase of string use-> .toLowerCase()
document.write(`</br>Lowercase of myName :: ${myName2.toLowerCase()}`);

// to find the character with index value of string use-> .charAt()
document.write(`</br>Find character with index  :: ${myName2.charAt(5)}`); // if not letter-> output blank
document.write(`</br>Find character with index of myName :: ${myName2[3]}`); // if not letter-> output undefined
document.write(`</br>Find character with index of myName :: ${myName2.at(-3)}`); // negative value will retun value from the end of string

// to find any character existed in string use-> .includes()
document.write(
  `</br>find any character existed in string :: ${myName.includes("y")}`
);

// to replace any character in string use-> .replace()
document.write(
  `</br>Replace any character existed in string :: ${myName.replace("y", "XX")}`
);

// to replace All any character in string use-> .replaceAll()
document.write(
  `</br>Replace all characters in string :: ${myName.replaceAll("a", "@")}`
);

// to concate any two strings -> .concate()
document.write(
  `</br>concat strings :: ${myName.concat(myName2).concat(" lets learn")}`
);
document.write(`</br>concate strings-2 :: ${myName + myName2 + " lets learn"}`);

// to compare any strings
function isEqual(str1, str2) {
  return console.log(str1.toUpperCase() === str2.toUpperCase());
}

isEqual("vinay", "Ravi"); // output--> False
isEqual("vinay", "kanak"); // output--> False
isEqual("KANAK", "kanak"); // output--> true

document.write(`</br>my Name is:::: ${myName}`);

// --------------------------------------------------
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy dog?";
// Finding index of particular character

const dog1st = "dog"; // Element to be searched
const dog2nd = paragraph.indexOf(dog1st); // 2nd Element to be Searched
const dog3rd = paragraph.indexOf(dog1st, dog2nd + 1); // 3rd Element to be searched

document.write(
  `</br></br>IndexOf String:::: ${paragraph.indexOf(
    "dog" // 40
  )}, "-->", ${paragraph.indexOf(
    dog1st,
    dog2nd + 1
  )}, 3rd dog ${paragraph.indexOf(dog1st, dog3rd + 1)} `
);

// ---last index of

const searchItem = "dog";
document.write(
  `</br>LastIndexOf <b>${searchItem} </b> is:::: ${paragraph.lastIndexOf(
    searchItem
  )}`
);

// -----padEnd-- Add character when the length of string got exceeded
const myString = "Infoxygen"; // length = 9
document.write(`</br>PadEnd is:::: ${myString.padEnd(15, "*")}`);

// -----padStart-- Add character when the length of string got exceeded
const padStartString = "Infoxygen"; // length = 9
document.write(`</br>PadStart is:::: ${padStartString.padStart(15, "*")}`);

//----String.raw-- to add any string using template-literals
const tempLit = String.raw`This is a template literal with .raw()`;
const tempLit2 = "This is a template literal with .raw()";

document.write(`<br/> this is .raw <b> ${tempLit} </b>`);
document.write(`<br/> This is without .raw <b> ${tempLit2} </b>`);

/**
 * Repeat --> To repeat any string, word on given number
 */
const repeatIt = "Ha";
document.write(` </br> He told me a joke and i did ${repeatIt.repeat(10)}`);

const whatIsYourName = "Sunil ";
document.write(
  "</br>Can you repeat your name for 5 times?",
  `</br>${whatIsYourName.repeat(whatIsYourName.length)}`
);

/**
 * Slice --> To cut any string from given index number
 */
const sliceString = "The quick brown fox jumps over the lazy dog.";
document.write(`</br> <b>single Slice --> </b> ${sliceString.slice(5)} `);
document.write(`</br> <b>double Slice--> </b> ${sliceString.slice(5, 21)} `);
document.write(
  `</br> <b>single Slice from end --> </b> ${sliceString.slice(-6)} `
);

/**
 * Split --> use to split any string and convert in into array on behalf of split type
 */
let splitString = "The quick brown fox jumps over the lazy dog.";
splitString = splitString.split(" ");
document.write(`</br> <b>Split-returns an array-> </b> ${splitString} `);

document.write(
  `</br> <b>Split - getting value from array of string--> </b> ${splitString[4]} & ${splitString[8]} `
);
console.log(`${splitString} ${splitString.length}`);

/**
 * startsWith() --> To check whether the given string is starting in main string
 */
let hello = "Hello, world! kanak ravi";
const newHello = hello.startsWith("Hell");

console.log("newHello ->", newHello);
document.write(`</br> <b>startsWith-returns boolean-> </b> ${newHello} `);

document.write(
  `</br> <b>startsWith-returns boolean middle of string-> </b> ${hello} `
);

/**
 * subString --> To cut any string from given index number
 */
const subStringJS = "The quick brown fox jumps over the lazy dog.";
document.write(
  `</br> <b>subString-returns sliced-string-> </b> ${subStringJS.substring(5)} `
);
document.write(
  `</br> <b>subString-returns sliced-string with range-> </b> ${subStringJS.substring(
    5,
    21
  )} `
);

/**
 * toString --> Convert any element/boolean/number/ array to string
 */
// const toStringJS = 1200;
// document.write(
//   `</br> <b>toString-returns string-> </b> ${
//     (toStringJS.toString(), typeof toStringJS.toString())
//   } `
// );

/**
 * trim --> clear the spaces from start and end of the string
 */
const trimTheSpaces = `    The   .     quick   .    brown    fox        jumps over the lazy dog.          `;

console.log(trimTheSpaces.trim(), trimTheSpaces.trim().length);

/**
 * trimStart --> clear the spaces from starting the string
 */
const trimTheSpacesFromStart = `         The   .     quick   .    brown    fox        jumps over the lazy dog.          `;

console.log(
  trimTheSpacesFromStart.trimStart(),
  trimTheSpacesFromStart.trimStart().length
);

/**
 * trimEnd --> clear the spaces from ending the string
 */
const trimTheSpacesFromEnd = `         The   .     quick   .    brown    fox        jumps over the lazy dog.          `;

console.log(
  trimTheSpacesFromEnd.trimEnd(),
  trimTheSpacesFromEnd.trimEnd().length
);
