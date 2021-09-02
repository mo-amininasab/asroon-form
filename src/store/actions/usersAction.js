import { ADD_USER, REMOVER_USER, EDIT_USER } from "../constants/userConstants";

export const addUser = (formFields) => {
    return {
        type: ADD_USER,
        payload: formFields
    }
}

export const removerUser = (id) => {
    return {
        type: REMOVER_USER,
        payload: id
    }
}