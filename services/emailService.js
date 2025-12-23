import nodemailer from 'nodemailer';

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;


const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: false, // true only for port 465
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

export const sendEmail = async (notification) => {
    try {
        const { recipient, message } = notification;

        await transporter.sendMail({
            from: EMAIL_USER,
            to: recipient.email,
            subject: message.title,
            text: message.body
        });

        return { status: "sent" };

    } catch (error) {
        console.error("Email sending failed:", error.message);
        return { status: "failed" };
    }
};
