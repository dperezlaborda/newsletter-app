import nodemailer from 'nodemailer';

export class EmailSenderService {

  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(subject: string, message: string, to: string, htmlBody: string): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: to,
      subject: subject,
      text: message,
      html: htmlBody,
    });
  }
}