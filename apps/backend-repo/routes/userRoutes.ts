import { Router } from 'express';
import { UserController } from '../controller/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const userController = new UserController();

router.put('/update-user-data/:id', authMiddleware, userController.updateUserData);
router.get('/fetch-user-data', authMiddleware, userController.fetchUserData);


export default router;