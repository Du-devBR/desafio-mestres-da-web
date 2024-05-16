import { RegisterTypes } from "../../../pages/register/types"
import { Action } from "./types"

export interface RegisterStates {
  register: RegisterTypes | null
}

const initialState: RegisterStates = {
  register: null
}

/**
 * Função reducer para gerenciar os estados do register
 * @param state
 * @param action
 * @returns  Retorna um novo estado após a execução de um type.
 */

export function registerReducer(state= initialState, action: Action){
  switch(action.type){
    case "POST_REGISTER":

      return {
        ...state,
        register: action.payload,
      }
    default:
      return state
  }
}
