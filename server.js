import express from 'express';
import notifications from './routes/notifications.js';
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/api/notifications',notifications);

app.listen(port,() => console.log(`server is running on port ${port}`));
