// categories.routes.ts
import { Router } from "express";
import { CreateUserCrontroller } from "../modules/user/useCases/createUser/createUserController";
import { FindByEmailUserCrontroller } from "../modules/user/useCases/findByEmail/FindByEmailUserController";


const userRoutes = Router();
const createUserCrontroller = new CreateUserCrontroller()
const findByEmailUserController = new FindByEmailUserCrontroller()


userRoutes.post("/", createUserCrontroller.handle)
userRoutes.get("/findByEmail", findByEmailUserController.handle)




export { userRoutes } 