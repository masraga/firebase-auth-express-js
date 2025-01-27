import {Request, Response, NextFunction} from "express"
import * as userService from "../services/user/userService"

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await userService.registerUser(req)
  res.status(user.statusCode).json({
    status: user.statusCode,
    error: user.error,
    data: user.data,
  })
  return 
}

export const login = async (req: Request, res: Response, next: NextFunction)=>{
  const userCred = await userService.login(req)
  res.json({
    statusCode: userCred.statusCode,
    error: userCred.error,
    data: userCred.data
  })
}

export const validateToken = async (req: Request, res: Response, next: NextFunction)=>{
  const userCred = await userService.validateToken(req)
  console.log(userCred)
  res.json({
    statusCode: userCred.statusCode,
    error: userCred.error,
    data: userCred.data,
  })
}