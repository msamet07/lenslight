import express  from 'express';
import * as userControler from "../controler/userControler.js" 
import * as autMiddleware from "../middlewares/authMiddleware.js";



const router = express.Router();



router.route("/register").post(userControler.createUser);
router.route("/login").post(userControler.loginUser);
router.route("/dashboard")
.get(autMiddleware.authenticateToken,userControler.getDashboardPage);
router.route("/").get(autMiddleware.authenticateToken,userControler.getAllUsers);
router.route("/:id").get(autMiddleware.authenticateToken,userControler.getAUser);
router.route("/:id/follow").put(autMiddleware.authenticateToken,userControler.follow);
router.route("/:id/unfollow").put(autMiddleware.authenticateToken,userControler.unfollow);






export default router;