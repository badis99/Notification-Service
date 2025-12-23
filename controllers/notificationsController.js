console.log("notificationController loaded");
import { createJob, jobs } from '../queue/notificationQueue.js';

export const sendNotifications = (req, res) => {
    const userId = req.body.id;
    const channel = req.body.channel?.toLowerCase();
    const recipient = req.body.recipient;
    const message = req.body.message;

    if (!userId || !channel || !recipient || !message) {
        return res.status(400).json({ message: "One of the required fields is empty" });
    }

    if (!["email", "sms", "push"].includes(channel)) {
        return res.status(400).json({ message: "Unsupported notification channel" });
    }

    const notification = { userId, channel, recipient, message };
    const job = createJob(notification);

    res.status(202).json({
        jobId: job.jobId,
        status: job.status,
        message: "Notification queued successfully"
    });
};

export const getJobById = (req, res) => {
    const jobId = req.params.jobId;
    const job = jobs.find(job => job.jobId === jobId);

    if (!job) return res.status(404).json({ message: `Job ${jobId} not found` });

    res.status(200).json(job);
};
