import React, { Component, useState } from "react";
import axios from "axios";

const TraditionalComp = () => {
  return (
    <>
      <h3> ES6 Function based Component</h3>
    </>
  );
};

export default TraditionalComp;

// -----Class Based Component ---

export class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      abc: {},
    };
  }

  componentDidMount = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) =>
        this.setState({ data: res }, () =>
          console.log("data 1", this.state.data)
        )
      );
    console.log("data 2", this.state.data);
  };

  render() {
    return (
      <>
        <h3>This is Class based component</h3>
      </>
    );
  }
}
