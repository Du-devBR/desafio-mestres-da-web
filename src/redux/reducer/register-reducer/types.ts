
import { RegisterTypes } from "../../../pages/register/types"

type PostNewRegister = {
  payload: RegisterTypes
  type: "POST_REGISTER"
}

export type Action = PostNewRegister
