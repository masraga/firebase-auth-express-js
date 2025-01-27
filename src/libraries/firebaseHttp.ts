import {httpRequest, lang} from "../helpers"
import dotenv from "dotenv"
import { IHttp } from "../helpers/httpRequest"
dotenv.config()

const baseUrl = process.env.FIREBASE_HTTP_URL
const apikey = process.env.FIREBASE_API_KEY

export const validateUserToken = async (token: string, returnSecureToken: boolean | true): Promise<any> => {
  try {
    const payload: IHttp = {  
      url: `${baseUrl}/accounts:signInWithCustomToken?key=${apikey}`,
      method: "post",
      payload: {
        token: token,
        returnSecureToken: returnSecureToken
      }
    }
    const result = await httpRequest(payload)
    return result.data
  }
  catch(e: any) {
    throw {
      statusCode: 401,
      code: "auth/id-token-expired",
    }
  }
}