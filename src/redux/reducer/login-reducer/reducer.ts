
import { LoginTypes } from "../../../pages/login/types"
import { Action } from "./types"

export interface LoginStates {
  login: LoginTypes | null
  error: boolean
}

const initialState = {
  login: null,
  error: false
}

/**
 * Função reducer para gerenciar os estados do login
 * @param state
 * @param action
 * @returns  Retorna um nov estado após a execução de um type.
 */
export function loginReducer(state= initialState, action: Action){
  switch(action.type){
    case "POST_LOGIN":

      return {
        ...state,
        login: action.payload,
        error: false
      }
    case "ERROR_LOGIN":
      return{
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
