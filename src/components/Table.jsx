import React, { useReducer } from "react";

import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { removerUser } from "../store/actions/actions";

// logo
import logo from "../assets/images/logo.png";

// style
import "./Table.scss";
import plusCircle from "../assets/icons/fi_plus-circle.svg";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import close from "../assets/icons/fi_x.svg";

const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { showModal: true, id: action.id };

    case "HIDE":
      return { showModal: false, id: null };

    default:
      return state;
  }
};

const Table = () => {
  const dispatch = useDispatch();
  const [modalState, dispatchModal] = useReducer(modalReducer, {
    showModal: false,
    id: null,
  });

  const users = useSelector((state) => state.users.users);

  const deleteUserHandler = () => {
    dispatch(removerUser(modalState.id));
    dispatchModal({ type: "HIDE" });
  };

  return (
    <div className="container">
      <img src={logo} alt="Asroon" className="logo" />
      <div className="group">
        <div className="flex">
          <div className="flex2">
            <Link to="/create-account" className="btn-create-account">
              ساخت اکانت جدید <img src={plusCircle} className="icon-plus" />
            </Link>
            <span className="btn-server">دریافت اطلاعات از سرور</span>
          </div>
          <span className="group-header">داده ها</span>
        </div>
        <table cellSpacing={0}>
          <thead className="thead">
            <tr>
              <th className="th-icon-2"></th>
              <th className="th-icon"></th>
              <th className="th-date">تاریخ ایجاد</th>
              <th className="th-email">ایمیل</th>
              <th className="th-age">سن</th>
              <th className="th-phone">شماره موبایل</th>
              <th className="th-name">نام و نام خانوادگی</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="td-icon-2">
                  <img
                    src={trash}
                    onClick={() => dispatchModal({ type: "SHOW", id: user.id })}
                  />
                </td>
                <td className="td-icon">
                  <img src={edit} />
                </td>
                <td className="td-date">{user.createdAt}</td>
                <td className="td-email">{user.email}</td>
                <td className="td-age">{user.age}</td>
                <td className="td-phone">{user.phone}</td>
                <td className="td-name">{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalState.showModal && (
        <div className="modal-container">
          <div className="modal">
            <header className="modal-header">
              <img
                src={close}
                onClick={() => dispatchModal({ type: "HIDE" })}
                className="modal-close"
              />
              حذف ردیف
            </header>
            <p className="modal-message">آیا از حذف این ردیف مطمئن هستید؟</p>
            <footer className="modla-footer">
              <button onClick={deleteUserHandler} className="modal-ok">
                حذف
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
