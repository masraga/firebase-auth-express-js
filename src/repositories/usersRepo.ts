import {Request} from "express"
import * as userModel from "../models/users"
import {lang} from "../helpers"
import {firebaseHttp} from "../libraries"

export type IRepo = Promise<{statusCode: number, data ?: any, error: string | false}>

export const register = async (req: Request, payload: userModel.fields): IRepo => {
  try{
    const {firebaseAuth} = req.app.locals
    const user = await firebaseAuth.createUser(payload);
    return {
      statusCode: 200,
      error: false,
      data: user.toJSON()
    }
  }
  catch(e: any) {
    return {
      statusCode: 412,
      error: lang(e.code)
    }
  }
}

export const login = async (req:Request, payload: {email: string, password: string}):IRepo => {
  try{
    const {firebaseAuth} = req.app.locals
    const userCred = await firebaseAuth.getUsers([
      {email: payload.email}
    ]);
    const user = typeof userCred.users[0] != "undefined" ? userCred.users[0].toJSON() : {};
    if(!user.uid){
      return {
        statusCode: 412,
        error: "Email / Password salah"
      }
    }
    const token = await firebaseAuth.createCustomToken(user.uid)
    return {
      statusCode: 200,
      error: false,
      data: token,
    }
  } 
  catch(e:any) {
    return {
      statusCode: 412,
      error: lang(e.code)
    }
  }
}

export const validateUserToken = async (req: Request, payload: {token: any}): IRepo => {
  try{
    const userCred = await firebaseHttp.validateUserToken(payload.token, true)
    return {
      statusCode: 200,
      error: false,
      data: userCred
    }
  }
  catch(e: any) {
    return {
      statusCode: 412,
      error: lang(e.code)
    }
  }
}