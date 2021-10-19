import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const services = new AuthenticateUserService();

    try {
      const result = await services.execute(code);
      return response.json(result);

    }catch(err) {
      return response.json({error: err.message});
    }

  }
}


export { AuthenticateUserController };