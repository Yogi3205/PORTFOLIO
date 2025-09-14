const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // IMPORTANT: Configure the email transporter.
    // You need to generate an "App Password" for your Gmail account.
    // 1. Go to your Google Account settings.
    // 2. Navigate to "Security".
    // 3. Enable 2-Step Verification.
    // 4. Go to "App passwords", generate a new password for "Mail" on "Windows Computer", and use it below.
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kevadiyayogi123@gmail.com', // Your Gmail address
            pass: 'dxpbitivvbjzwxae' // Your generated App Password
        }
    });

    const mailOptions = {
        from: email,
        to: 'kevadiyayogi123@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
            <h3>New message from your portfolio contact form.</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
