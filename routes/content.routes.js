import express from 'express';
import { getContent, updateContent } from '../controllers/controller.siteContent.js';
import { protectAdmin } from '../middleware/auth.js';
import { loginAdmin, signupAdmin } from '../controllers/auth.controller.js';
import { getImages, uploadImage, deleteImage, serveImage, serveImage2 } from '../controllers/image.controller.js';

const router = express.Router();

router.get('/content',getContent);
router.put('/content', protectAdmin, updateContent);
router.post('/admin/login', loginAdmin);
router.post('/admin/signup', signupAdmin); 
router.get('/images', getImages);
router.get('/images/:path',serveImage);
router.get('/images/team/:path',serveImage2);
router.delete('/images/:path', protectAdmin, deleteImage);
router.post('/upload', protectAdmin, uploadImage);

export default router;
