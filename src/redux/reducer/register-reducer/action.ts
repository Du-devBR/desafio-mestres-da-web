import { Dispatch } from "@reduxjs/toolkit"
import { RegisterTypes } from "../../../pages/register/types";

/**
 * Action para realizar o cadastro de usuario, será chamado junto a função fetchRegisterUser
 * @param payload
 * @interface RegisterTypes
 * @returns objeto para a action com o type e o payload.
 */

export const postNewRegisterUser = (payload: RegisterTypes) => {
  return {
    type: "POST_REGISTER",
    payload,
  };
};

/**
 * Função fetch async para cadastrar um novo usuario
 * @param register
 * @interface RegisterTypes
 * @returns Função async para obter os dados passado pelo parametro register e salva no local storage como user
 */
export const fetchRegisterUser = (register: RegisterTypes) => {
  return async(dispatch: Dispatch) => {
    const registerTrasformString = JSON.stringify(register)
    localStorage.setItem("user", registerTrasformString)

    return dispatch(postNewRegisterUser(register))
  }
}
