import * as nodemailer from 'nodemailer';

export async function sendEmail(subject: string, body: string): Promise<{ success: true, error: null } | { success: false, error: string }> {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    // Define the email options
    const mailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject,
      text: body,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return { success: true, error: null }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error }
  }
}