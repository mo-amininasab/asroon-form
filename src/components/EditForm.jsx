import React, { useReducer, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/actions/actions";

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

const EditForm = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === match.params.id)
  );

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: user.name,
    isValid: true,
  });

  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: user.phone,
    isValid: true,
  });

  const [ageState, dispatchAge] = useReducer(ageReducer, {
    value: user.age,
    isValid: true,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: user.email,
    isValid: true,
  });

  const [formIsValid, setFormIsValid] = useState(true);

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
    dispatch(editUser(e.target, match.params.id));
  };

  return (
    <div className="container">
      <img src={logo} alt="Asroon" className="logo" />
      <form className="form-container" onSubmit={formSubmitHandler}>
        <h3 className="form-header">ویرایش</h3>
        <div className="text-field-1">
          <span className="label">نام و نام خانوادگی</span>
          <input
            type="text"
            placeholder="نام و نام خانوادگی شما"
            className="input"
            vlaue={nameState.value}
            defaultValue={nameState.value}
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
            defaultValue={phoneState.value}
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
            defaultValue={ageState.value}
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
            defaultValue={emailState.value}
            onChange={(e) =>
              dispatchEmail({ type: "CHANGE", payload: e.target.value })
            }
          />
        </div>
        <button to="/table" className="submit-btn" disabled={!formIsValid}>
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
};

export default EditForm;
