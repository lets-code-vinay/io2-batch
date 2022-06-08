import React, { useEffect, useState } from "react";
import Child from "../../Assets/Images/child.jpg";

const PhotoFrame = (props) => {
  console.log(props);
  const { myName = "" } = props || {};
  const [name, setName] = useState("Ravi");

  useEffect(() => {
    setName("Sunil");
  }, [name, setName]);

  return (
    <>
      <h2>{myName}</h2>
      <img src={Child} alt="child img" />
    </>
  );
};

export default PhotoFrame;
