import {Router, Request, Response, NextFunction} from "express"
import * as userController from "../controllers/userController"

const route = Router()

route.post("/", userController.registerUser)
route.post("/login", userController.login)
route.get("/validateToken", userController.validateToken)

export default route