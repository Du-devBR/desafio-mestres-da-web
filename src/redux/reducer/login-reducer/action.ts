import { Dispatch } from "@reduxjs/toolkit"
import { LoginTypes } from "../../../pages/login/types";

/**
 * Action para realizar o login, será chamado junto a função fetchLoginUser
 * @param payload
 * @interface LoginTypes
 * @returns objeto para a action com o type e o payload.
 */
export const postLoginUser = (payload: LoginTypes) => {
  return {
    type: "POST_LOGIN",
    payload,
  };
};

/**
 * Action para retornar um boolean para indicar erro ao realizar o login, será chamado na condição else do fetchLoginUser
 * @param payload: Boolean
 * @returns objeto para a action com o type e o payload.
 */
export const errorUserLogin = (payload: boolean) => {
  return {
    type: "ERROR_LOGIN",
    payload,
  };
};

/**
 * Função fetch async para obter dados da api com base no id do usuario.
 * @param login
 * @interface LoginTypes
 * @returns Função async para comparar se o payload passado possui no localStorage
 */
export const fetchLoginUser =  (login: LoginTypes) => {
  return async(dispatch: Dispatch) => {
    const credentialUserLocalStorage = localStorage.getItem("user")

    /**
     * Valida se o retorno no localStorage é true.
     */
    if(!credentialUserLocalStorage){
      return dispatch(errorUserLogin(true))
    }
    if(credentialUserLocalStorage){
      const loginUser: LoginTypes = JSON.parse(credentialUserLocalStorage)
      if(loginUser.user === login.user && loginUser.password === login.password){
        return dispatch(postLoginUser(loginUser))

      }else {
        dispatch(errorUserLogin(true))
      }
    }

  }
}
