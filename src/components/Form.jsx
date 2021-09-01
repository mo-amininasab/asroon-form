import React from "react";

// image
import logo from "../assets/images/logo.png";

// style
import "./Form.scss";

const Form = () => {
  return (
    <div className="container">
      <img src={logo} alt="Asroon" className="logo" />
      <form className="form-container">
        <h3 className="form-header">.فرم زیر را پر کنید</h3>
        <div className="text-field-1">
          <span className="label">نام و نام خانوادگی</span>
          <input
            type="text"
            placeholder="نام و نام خانوادگی شما"
            className="input"
          />
        </div>
        <div className="text-field-2">
          <span className="label">شماره موبایل</span>
          <input
            type="number"
            placeholder="شماره موبایل"
            className="input"
          />
        </div>
        <div className="text-field-3">
          <span className="label">سن</span>
          <input
            type="number"
            placeholder="سن شما"
            className="input"
          />
        </div>
        <div className="text-field-4">
          <span className="label">ایمیل</span>
          <input
            type="text"
            placeholder="ایمیل شما"
            className="input"
          />
        </div>
        <button className="submit-btn">ساخت اکانت</button>
      </form>
    </div>
  );
};

export default Form;
