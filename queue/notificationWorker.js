import { jobs } from './notificationQueue.js';
import { notifService } from '../services/notificationService.js';

export const processJob = async () => {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === "pending") {
            jobs[i].status = "processing";
            console.log(`Job ${jobs[i].jobId} - ${jobs[i].notification.channel} processing`);
            const result = await notifService(jobs[i].notification);
            jobs[i].status = result.status === "queued" ? "done" : "failed";
            jobs[i].processedAt = new Date().toISOString();
            console.log(`Job ${jobs[i].jobId} - ${jobs[i].notification.channel} done`);
        }
    }
};

setInterval(processJob, 1000);
