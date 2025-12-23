import express from 'express';
import bodyParser from 'body-parser';

// ⚠️ VERY IMPORTANT: import worker ONCE so it runs
import './queue/notificationWorker.js';

import {
  sendNotifications,
  getJobById
} from './controllers/notificationsController.js';

console.log("sendNotifications:", typeof sendNotifications);
console.log("getJobById:", typeof getJobById);

const app = express();

app.use(bodyParser.json());

// TEST ROUTE
app.get('/ping', (req, res) => res.send('pong'));

// API ROUTES
console.log("Registering notification routes");

app.post('/api/notifications', sendNotifications);
app.get('/api/notifications/:jobId', getJobById);

console.log("Routes registered");

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
