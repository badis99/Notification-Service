import { sendEmail } from './emailService.js';


export const notifService = async (notification) => {
    switch(notification.channel) {
        case "email":
            return await sendEmail(notification);
            break;
        case "sms":
            console.log(`Sending SMS to ${notification.recipient.phone}`);
            break;
        case "push":
            console.log(`Sending push notification to ${notification.recipient.deviceId}`);
            break;
        default:
            return { status: "failed" };
    }

    return { status: "queued" };
};
