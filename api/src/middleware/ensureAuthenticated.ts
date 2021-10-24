import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

type IPayload = {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorerrorCode: "token.invalid"
        })
    }
    // header: {'authorization': 'Bearer 264012640798136071'} 
    // [0] Bearer
    // [1] 264012640798136071

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload; //sub = user_id?

        request.user_id = sub;

        return next();

    } catch (err) {
        return response.status(401).json({
            errorCode: "token.expired"
        })
    }

}