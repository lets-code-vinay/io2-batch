import React from "react";
import crossIcon from "../../Assets/Images/cross.png";

const LoginTitle = ({ title = "Sign up", titleColor = "blue" }) => {
  return (
    <>
      <div className="sign-up-title">
        <h2 id="title" style={{ color: `${titleColor}` }}>
          {title}
        </h2>
        <div className="cross-icon">
          <img src={crossIcon} height="24px" width="24px" alt="Facebook logo" />
        </div>
      </div>
    </>
  );
};
export default LoginTitle;
