import React from "react";

// logo
import logo from "../assets/images/logo.png";

// style
import "./Table.scss";
import plusCircle from "../assets/icons/fi_plus-circle.svg";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";

const Table = () => {
  return (
    <div className="container">
      <img src={logo} alt="Asroon" className="logo" />
      <div className="group">
        <div className="flex">
          <div className="flex2">
            <span className="btn-create-account">
              ساخت اکانت جدید <img src={plusCircle} className="icon-plus" />
            </span>
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
            <tr>
              <td className="td-icon-2">
                <img src={trash} />
              </td>
              <td className="td-icon">
                <img src={edit} />
              </td>
              <td className="td-date">۹۹/۰۳/۰۲</td>
              <td className="td-email">Arashdma@gamil.com</td>
              <td className="td-age">۳۴</td>
              <td className="td-phone">۰۹۳۶۶۱۸۳۴۸۳</td>
              <td className="td-name">آرش دامن افشان</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;