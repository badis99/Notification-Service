import express from 'express';
import {sendNotifications} from '../controllers/notificationsController.js';
const router = express.Router();


router.post('/', sendNotifications);


export default router;

