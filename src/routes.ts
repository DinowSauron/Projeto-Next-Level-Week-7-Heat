import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { AuthenticateUserService } from "./services/AuthenticateUserService";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

export { router }