import { ADD_USER, REMOVER_USER, EDIT_USER } from "../constants/userConstants";

const initialState = {
  users: [
    {
      id: "Arashdma@gamil.com",
      name: "آرش دامن افشان",
      phone: "09366183483",
      age: "34",
      email: "Arashdma@gamil.com",
      createdAt: "۹۹/۰۳/۰۲",
    },
    {
      id: "demo@gamil.com",
      name: "محمد امینی نسب",
      phone: "09022727623",
      age: "21",
      email: "demo@gamil.com",
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

    case REMOVER_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case EDIT_USER:
      const theUser = state.users.find((user) => user.id === action.id);
      const filteredUsers = state.users.filter((user) => user.id !== action.id);
      const editedUesr = {
        id: action.payload[3].value,
        name: action.payload[0].value,
        phone: action.payload[1].value,
        age: action.payload[2].value,
        email: action.payload[3].value,
        createdAt: theUser.createdAt,
      };
      return {
        ...state,
        users: filteredUsers.concat(editedUesr),
      };

    default:
      return state;
  }
};

export default usersReducer;
