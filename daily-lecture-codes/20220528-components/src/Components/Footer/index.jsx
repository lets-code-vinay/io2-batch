import React from "react";
import Child from "../../Assets/Images/child.jpg";

// // es5
// function Footer () {

// }
// Es6
const Footer = () => {
  return (
    <>
      <h2>Footer</h2>
      <img src={Child} alt="child img" />
    </>
  );
};

const Footer_2 = () => {
  return (
    <>
      <h2>Footer</h2>
    </>
  );
};

const Footer3 = () => {
  return (
    <>
      <h2>Footer3</h2>
    </>
  );
};

export default Footer_2;

export { Footer, Footer3 };
