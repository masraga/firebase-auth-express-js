import {Request} from "express"
import * as userModel from "../../models/users"
import * as usersRepo from "../../repositories/usersRepo"

type IService = Promise<{statusCode: number, data ?: any, error: string | false}>

export const registerUser = async (req: Request) => {
  let payload: userModel.fields = {
    email: req.body.email,
    password: req.body.password,
    displayName: req.body.displayName
  }
  const newUser = await usersRepo.register(req, payload)
  return newUser
}

export const login = async (req: Request): IService => {
  try{
    const userCred = await usersRepo.login(req, {email: req.body.email, password: req.body.password});
    return {
      statusCode: userCred.statusCode,
      error: userCred.error,
      data: userCred.data
    }
  }
  catch(e: any){
    return {
      statusCode: e.statusCode,
      error: e.error
    }
  }
}

export const validateToken = async (req: Request): IService => {
  try{
    const userCred = await usersRepo.validateUserToken(req, {token: req.query.token})
    return {
      statusCode: userCred.statusCode,
      error: userCred.error,
      data: userCred.data
    }
  }
  catch(e: any) {
    return {
      statusCode: e.statusCode,
      error: e.error,
    }
  }
}