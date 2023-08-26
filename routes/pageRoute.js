import express  from 'express';
import * as pageControler from "../controler/pageControler.js";




const router = express.Router();

router.route("/").get( pageControler.getIndexPage);
router.route("/about").get(pageControler.getAboutPage);
router.route("/register").get(pageControler.getRegisterPage);
router.route("/login").get(pageControler.getLoginPage);
router.route("/logout").get(pageControler.getLogout);
router.route("/contact").get(pageControler.getContactPage);
router.route("/contact").post(pageControler.sendMail);

export default router;