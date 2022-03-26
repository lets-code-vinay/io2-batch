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
document.write(`</br>Find character with index  :: ${myName2.charAt(8)}`);
document.write(`</br>Find character with index of myName :: ${myName2[3]}`);
document.write(`</br>Find character with index of myName :: ${myName2.at(3)}`); // negative value will retun value from the end of string

// to find any character existed in string use-> .includes()
document.write(
  `</br>find any character existed in string :: ${myName.includes("y")}`
);

// to replace any character in string use-> .replace()
document.write(
  `</br>Replace any character existed in string :: ${myName.replace("y", "t")}`
);

// to replace All any character in string use-> .replaceAll()
document.write(
  `</br>Replace all characters in string :: ${myName.replaceAll("a", "@")}`
);

// to concate any two strings -> .concate()
document.write(
  `</br>concate strings :: ${myName.concat(myName2).concat(" lets learn")}`
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
