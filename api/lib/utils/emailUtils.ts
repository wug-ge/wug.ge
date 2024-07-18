import * as nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, body: string): Promise<void> {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'your-email@example.com',
      to,
      subject,
      text: body,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}