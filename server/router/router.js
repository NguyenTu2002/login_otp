import { Router } from "express";
import * as controller from '../controllers/appControllers.js'
const router = Router();
//post
router.route('/register').post(controller.register);
//router.route('/registerMail').post();
router.route('/authenticate').post((req, res) => res.end());
router.route('/login').post(controller.login);

//get
router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.generateOTP);//ramdom OTP
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);//reset all the variables
//put
router.route('/updateuser').put(controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);

export default router;