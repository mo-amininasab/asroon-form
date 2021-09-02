import React, { useReducer, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addUser } from '../store/actions/actions'

// image
import logo from "../assets/images/logo.png";

// style
import "./Form.scss";

const nameReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { value: action.payload, isValid: action.payload.length > 3 };

    default:
      return state;
  }
};

const phoneReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { value: action.payload, isValid: action.payload.length === 11 };

    default:
      return state;
  }
};

const ageReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        value: action.payload,
        isValid: action.payload > 0 && action.payload < 120,
      };

    default:
      return state;
  }
};

const emailReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        value: action.payload,
        isValid: action.payload.includes("@"),
      };

    default:
      return state;
  }
};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false,
  });

  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: "",
    isValid: false,
  });

  const [ageState, dispatchAge] = useReducer(ageReducer, {
    value: "",
    isValid: false,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (
      nameState.isValid &&
      phoneState.isValid &&
      ageState.isValid &&
      emailState.isValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameState, phoneState, ageState, emailState]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    history.push("/table");
    console.log(e);
    dispatch(addUser(e.target))
  };

  return (
    <div className="container">
      <img src={logo} alt="Asroon" className="logo" />
      <form className="form-container" onSubmit={formSubmitHandler}>
        <h3 className="form-header">.فرم زیر را پر کنید</h3>
        <div className="text-field-1">
          <span className="label">نام و نام خانوادگی</span>
          <input
            type="text"
            placeholder="نام و نام خانوادگی شما"
            className="input"
            vlaue={nameState.value}
            onChange={(e) =>
              dispatchName({ type: "CHANGE", payload: e.target.value })
            }
          />
        </div>
        <div className="text-field-2">
          <span className="label">شماره موبایل</span>
          <input
            type="number"
            placeholder="شماره موبایل"
            className="input"
            vlaue={phoneState.value}
            onChange={(e) =>
              dispatchPhone({ type: "CHANGE", payload: e.target.value })
            }
          />
        </div>
        <div className="text-field-3">
          <span className="label">سن</span>
          <input
            type="number"
            placeholder="سن شما"
            className="input"
            vlaue={ageState.value}
            onChange={(e) =>
              dispatchAge({ type: "CHANGE", payload: e.target.value })
            }
          />
        </div>
        <div className="text-field-4">
          <span className="label">ایمیل</span>
          <input
            type="text"
            placeholder="ایمیل شما"
            className="input"
            vlaue={emailState.value}
            onChange={(e) =>
              dispatchEmail({ type: "CHANGE", payload: e.target.value })
            }
          />
        </div>
        <button to="/table" className="submit-btn" disabled={!formIsValid}>
          ساخت اکانت
        </button>
      </form>
    </div>
  );
};

export default Form;
