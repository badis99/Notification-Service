import express from 'express';
import {sendNotifications, getJobById} from '../controllers/notificationsController.js';
const router = express.Router();


router.post('/', sendNotifications);
router.get('/:jobId', getJobById);


export default router;

