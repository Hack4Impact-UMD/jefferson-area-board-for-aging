const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'YourEmailService', // e.g., 'Gmail', 'SendGrid'
    auth: {
        user: 'your@email.com',
        pass: 'yourPassword',
    },
});

async function sendEmail(formData) {
    const mailOptions = {
        from: 'your@email.com',
        to: 'skrushi31@gmail.com.com',
        subject: 'Form Submission',
        text: JSON.stringify(formData),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendEmail };