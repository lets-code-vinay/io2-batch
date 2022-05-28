import React from "react";
import InputBox from "../../Components/InputBox";
import LoginSubtitle from "../../Components/LoginSubtitle";
import LoginTitle from "../../Components/LoginTitle";
import "./style.css";

const FacebookLogin = () => {
  return (
    <div className="fb-signup-div">
      <LoginTitle />
      <LoginSubtitle />
      <hr />
      <div className="form">
        <div className="names">
          <InputBox
            inputType={"text"}
            inputPlaceholder={'"First Name'}
            id={"first-name"}
            inputClassName={"name-input"}
          />
          <InputBox
            inputType={"text"}
            inputPlaceholder={"Last Name"}
            id={"last-name"}
            inputClassName={"name-input"}
          />
        </div>
        <input
          type="text"
          placeholder="Mobile number or Email Address"
          className="email-mobile"
        />

        <input
          type="password"
          placeholder="New Password"
          className="password"
        />
        <div className="date-of-birth">
          <label>Date of Birth</label>
          <br />
          <div className="dob">
            <select>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
            </select>

            <select>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
            </select>

            <select>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
            </select>
          </div>
        </div>

        {/*  Radio buttons for gender */}
        <div className="gender-division">
          <label>Gender</label>
          <br />
          <div className="gender-div">
            <div className="gender" id="gender-radio">
              <span id="gender-male-label">Male</span>
              <input type="radio" id="gender-male" />
            </div>
            <div className="gender" id="gender-female">
              <span id="gender-female-label">Female</span>
              <input type="radio" id="gender-radio" />
            </div>
            <div className="gender" id="gender-other">
              <span id="gender-other-label">Other</span>
              <input type="radio" id="gender-radio" />
            </div>
          </div>
        </div>

        {/* <!--Terms & conditions--> */}
        <div>
          <p id="terms-condi">
            By clicking Sign Up, you agree to our
            <a href="https://youtube.com" target="blank">
              Terms
            </a>
            ,
            <a href="https://github.com/" target="blank">
              Data Policy
            </a>
            and{" "}
            <a href="https://google.co.in" target="blank">
              Cookie Policy
            </a>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </p>
        </div>

        {/* <!--Sign up button--> */}
        <div className="sign-up-button">
          <input type="submit" value="Sign Up" id="signup" />
        </div>
      </div>
    </div>
  );
};

export default FacebookLogin;
