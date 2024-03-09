import express from 'express';
import multipleUpload from '../middleware/multipleUpload.js';
//for single upload
// import singleUpload from '../middleware/multer.js';

import { handleImageUpload } from '../controller/imageController.js';



const router=express.Router();

//for single upload
// router.post('/upload', singleUpload,handleImageUpload);
router.post('/upload',multipleUpload,handleImageUpload);



export default router;



