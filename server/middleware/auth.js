import jwt from "jsonwebtoken";
import ENV from "../config.js"
export default async function Auth(req, res, next) {
    try {
        const token = req.headers.authorization.slip(" ")[1];
        const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);
        req.user = decodedToken;
        res.json(decodedToken);
        next();
    } catch (error) {
        res.status(401).json({ error: "Authentication failed !" })
    }
}
export function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}