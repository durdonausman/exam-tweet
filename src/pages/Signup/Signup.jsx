import "./signup.css";
import { Link } from "react-router-dom";
import logo from "../../Images/twitter-logo.png";

function SignUp() {
  return (
    <div className="signup__modal">
      <div className="signup__modal-content">
        <div className="signup-logo">
          <img
            className="signup__modal-logo"
            src={logo}
            width="40"
            height="33"
            alt=""
          />
        </div>
        <h2 className="signup__modal-heading">Create an account</h2>
        <input
          className="signup__input signup__input-top"
          type="text"
          placeholder="Name"
          required
        />{" "}
        <br />
        <input
          className="signup__input signup__input-top"
          type="tel"
          placeholder="Phone number"
        />
        <p className="signup-email">Use email</p>
        <h3 className="signup__date-heading">Date of birth</h3>
        <p className="signup__date-text">
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        <div className="signup__date-inputs">
          <input
            className="signup__input input-month"
            type="text"
            placeholder="Month"
          />
          <input
            className="signup__input input-day"
            type="text"
            placeholder="Day"
          />
          <input
            className="signup__input input-year"
            type="text"
            placeholder="Year"
          />
        </div>
        <button className="signup__next-btn" type="submit">
          <Link className="signup__next-link" to="/home">
            {" "}
            Next
          </Link>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
