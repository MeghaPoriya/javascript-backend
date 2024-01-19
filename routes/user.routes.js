import { Router } from "express";
import { registerUser } from "../public/controllers/user.controller";
 js":

const router = Router()


router.route("/register").post(registerUser)




export default router 
