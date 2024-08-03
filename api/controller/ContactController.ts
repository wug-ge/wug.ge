import { Request, Response } from 'express'
import { sendEmail } from '../lib/utils/emailUtils';

export class ContactController {
  async saveContact(req: Request, res: Response) {
    try {
      const { message, email } = req.body;
      const recipientEmail = process.env.CONTACT_EMAIL;

      if (!recipientEmail) {
        throw new Error('Contact email not found');
      }

      const emailBody = `Email: ${email}\n\nMessage: ${message}`;

      await sendEmail(recipientEmail, `Website Contact`, emailBody);
      res.json({success: true});
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({success: false, error: 'Failed to send email'});
    }
  }
}