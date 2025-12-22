// jobId (string)
// notification (your clean notification object)
// status → "pending" | "processing" | "done" | "failed"
// createdAt

let jobs = [];

export const createJob = (notification) => {
    const newJob = {
        jobId : (jobs.length + 1).toString(),
        notification : notification,
        status : "pending",
        createdAt : new Date().toISOString() 
    }
    jobs.push(newJob);
    console.log(`job ${newJob.jobId} queued`);
    return newJob;
}