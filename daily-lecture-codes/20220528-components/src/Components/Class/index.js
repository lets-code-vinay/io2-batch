import React, { Component, useState } from "react";

export function MyComp() {
  return (
    <>
      <h3>Hello function Traditional</h3>
    </>
  );
}

const TraditionalComp = () => {
  const [comp, setComp] = useState("sunil");

  function handleButtonClick(e) {
    console.log("hello", e);
  }

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setComp(`${comp}${e.target.value}`);
  };

  return (
    <>
      <h3>{comp} ES6 Function based Component</h3>
      <input type="button" onClick={handleButtonClick} value="Click here" />
      <input
        type="text"
        onChange={handleNameChange}
        value={comp}
        placeholder="Enter any name"
      />
    </>
  );
};

export default TraditionalComp;

// -----Class Based Component ---

export class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vinay",
      className: "2nd",
      age: "5",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ age: "10", name: "Sunil" });
    }, 5000);
  }

  render() {
    console.log("inside render", this.state);

    console.log("this", this);

    const { name = "", age = 0, className = "" } = this.state || {};

    return (
      <>
        <h3>
          My name is {name}. I am {age} years old and i read in {className}{" "}
          class.
        </h3>
      </>
    );
  }
}
