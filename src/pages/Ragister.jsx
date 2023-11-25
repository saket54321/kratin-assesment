import React from "react";
import "./Ragister.css";

const Ragister = () => {
  return (
    <div>
      <div className="ragisterContainer">
        <div className="title">Sign Up</div>
        <div className="input-box-Name">
          <div className="input-box underline name">
            <input type="text" placeholder="First Name" required />
            <div className="underline"></div>
          </div>
          <div className="input-box underline name">
            <input type="text" placeholder="Last Name" required />
            <div className="underline"></div>
          </div>
        </div>
        <div className="input-box underline">
          <input type="email" placeholder="Enter Your Email id" required />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Your Password" required />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Your Password" required />
          <div className="underline"></div>
        </div>

        <div className="input-box">
          <input
            name="date"
            type="text"
            placeholder="Enter Your Birth Date"
            required
          />
          <div className="underline"></div>
        </div>

        <div className="gender">
          <label>Gender</label>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="Gender" value="Male" />
          Male&nbsp;&nbsp;
          <input type="radio" name="Gender" value="Male" />
          Female&nbsp;&nbsp;
          <input type="radio" name="Gender" value="Male" />
          Other
        </div>

        <div className="input-box button">
          <input type="submit" name="" value="Sing Up" />
        </div>
      </div>
    </div>
  );
};

export default Ragister;
