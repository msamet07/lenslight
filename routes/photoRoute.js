import express  from 'express';
import * as photoControler from "../controler/photoControler.js" 



const router = express.Router();

router
.route("/")
.post(photoControler.createPhoto)
.get(photoControler.getAllPhotos);

router.route("/:id")
.get(photoControler.getAPhoto);

router.route("/:id")
.delete(photoControler.deletePhoto);

router.route("/:id")
.put(photoControler.updatePhoto);

export default router;