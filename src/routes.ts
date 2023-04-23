import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "./modules/user/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { RegisterPersonalDataController } from "./modules/user/useCases/registerPersonalData/RegisterPersonalDataController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const registerPersonalDataController = new RegisterPersonalDataController()

routes.post('/auth/register', createUserController.handle)
routes.post('/auth/login', authenticateUserController.handle)
routes.post('/auth/registerDadosPessoais', ensureAuthenticateUser, registerPersonalDataController.handle)

export { routes }