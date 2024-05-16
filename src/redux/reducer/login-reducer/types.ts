import { LoginTypes } from "../../../pages/login/types"

type PostNewLogin= {
  payload: LoginTypes
  type: "POST_LOGIN"
}

type ErrorUserLogin= {
  payload: boolean
  type: "ERROR_LOGIN"
}

export type Action = PostNewLogin | ErrorUserLogin
