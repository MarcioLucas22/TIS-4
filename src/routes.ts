import { Router } from "express";
import { ensureAuthenticatePaciente } from "./middlewares/ensureAuthenticatePaciente";
import { ensureAuthenticateMedico } from "./middlewares/ensureAuthenticateMedico";
import { AuthenticateUserController } from "./modules/user/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { RegisterPersonalDataController } from "./modules/user/useCases/registerPersonalData/RegisterPersonalDataController";
import { AuthenticateUserMedicoController } from "./modules/userMedico/useCases/authenticateUserMedico/AuthenticateUserMedicoController";
import { CreateUserMedicoController } from "./modules/userMedico/useCases/createUserMedico/CreateUserMedicoController";
import { UpdateMedicoController } from "./modules/userMedico/useCases/updateMedico/UpdateMedicoController";
import { GetPacienteController } from "./modules/user/useCases/getPaciente/GetPacienteController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const registerPersonalDataController = new RegisterPersonalDataController()
const createUserMedicoController = new CreateUserMedicoController()
const authenticateUserMedicoController = new AuthenticateUserMedicoController()
const updateMedicoController = new UpdateMedicoController()
const getPacienteController = new GetPacienteController()

routes.post('/auth/registroPaciente', createUserController.handle)
routes.post('/auth/loginPaciente', authenticateUserController.handle)
routes.post('/auth/paciente/registroDadosPessoais', ensureAuthenticatePaciente, registerPersonalDataController.handle)
routes.post('/auth/registroMedico', createUserMedicoController.handle)
routes.post('/auth/loginMedico', authenticateUserMedicoController.handle)
routes.put('/auth/medico/atualizaDados', ensureAuthenticateMedico, updateMedicoController.handle)
routes.get('/auth/buscaPaciente/:id', ensureAuthenticateMedico, getPacienteController.handle)

export { routes }