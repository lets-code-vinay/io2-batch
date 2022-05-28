import React from "react";

const InputBox = ({
  inputType = "text",
  inputPlaceholder = "Enter any value",
  inputClassName = "",
  inputID = "",
}) => {
  return (
    <>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        id={inputID}
        className={inputClassName}
      />
    </>
  );
};

export default InputBox;
