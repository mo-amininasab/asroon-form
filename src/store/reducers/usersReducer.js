import { ADD_USER, REMOVER_USER, EDIT_USER } from "../constants/userConstants";

const initialState = {
  users: [
    {
      id: "Arashdma@gamil.com",
      name: "آرش دامن افشان",
      phone: "۰۹۳۶۶۱۸۳۴۸۳",
      age: "34",
      email: "Arashdma@gamil.com",
      createdAt: "۹۹/۰۳/۰۲",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUser = {
        id: action.payload[3].value,
        name: action.payload[0].value,
        phone: action.payload[1].value,
        age: action.payload[2].value,
        email: action.payload[3].value,
        createdAt: new Date().toLocaleDateString(),
      };
      return {
        ...state,
        users: state.users.concat(newUser),
      };

    default:
      return state;
  }
};

export default usersReducer;