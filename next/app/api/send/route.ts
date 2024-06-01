import PostModel from '../../models/formModel';
import { NextResponse } from 'next/server';
import { connectToMongo } from '../../utils/db'; // A utility to handle DB connection
import nodemailer from 'nodemailer';

const MONGODB_URI = process.env.MONGODB_URI;
const MAIL_NODEMAILER = process.env.MAIL_NODEMAILER;
const MDP_NODEMAILER = process.env.MDP_NODEMAILER;

if (!MONGODB_URI || !MAIL_NODEMAILER || !MDP_NODEMAILER) {
    throw new Error('Please define all the required environment variables in .env.local');
}

export const transporter = nodemailer.createTransport({
    port: 587,
    service: 'gmail', // true for 465, false for other ports
    auth: {
        user: MAIL_NODEMAILER,
        pass: MDP_NODEMAILER,
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
    },
});


const sendMail = async (data: { email: string; username: string; text: string; }) => {
    try {
        await transporter.sendMail({
            from: "WebZizardry <no-reply@webzizardry.com>",
            to: MAIL_NODEMAILER,
            replyTo: data.email,
            subject: `Website activity from ${data.username}`,
            html: `
                <p>Name: ${data.username}</p>
                <p>Email: ${data.email}</p>
                <p>Message: ${data.text}</p>
            `,
        });
        return { message: "Success: email was sent" };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error("COULD NOT SEND MESSAGE");
    }
};

export const POST = async (request: Request) => {
    try {
        // Ensure database connection
        await connectToMongo(MONGODB_URI);

        const requestData = await request.json();

        // Server-side validation (redundant but adds security)
        const { email, username, text } = requestData;
        if (!email || !username || !text) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        const message = new PostModel(requestData);
        await message.save();

        // Send email notification
        const mailResponse = await sendMail(requestData);

        return NextResponse.json({ message, mailResponse }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};
