export let jobs = [];

export const createJob = (notification) => {
    const newJob = {
        jobId: `${jobs.length + 1}`,
        notification,
        status: "pending",
        createdAt: new Date().toISOString()
    };
    jobs.push(newJob);
    console.log(`Job ${newJob.jobId} queued`);
    return newJob;
};
