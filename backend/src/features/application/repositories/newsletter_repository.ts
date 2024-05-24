import { INewsletterPresenter } from "../../domain/presenters/newsletter_presenter";
import { EmailSenderService } from "../../infrastructure/local/services/email_sender_service";
import { PrismaServices } from "../../infrastructure/local/services/prisma_services";

export class NewsletterRepository implements INewsletterPresenter {
  private _prismaServices: PrismaServices;
  private _emailSenderService: EmailSenderService;

  constructor(prismaServices: PrismaServices, emailSenderService: EmailSenderService) {
    this._prismaServices = prismaServices;
    this._emailSenderService = emailSenderService;
  }

  async sendNewsletter(
    subject: string,
    message: string
  ): Promise<void> {
    const users = await this._prismaServices.getUsers();
    users.forEach((user: any) => {
      this._emailSenderService.sendEmail(
        user.email,
        subject,
        message,
        `<h1>${message}</h1>`
      );
    });
  }

  async addEmail(userEmail: string): Promise<void> {
    return this._prismaServices.addEmail(userEmail);
  }

  async addEmails(userEmails: string[]): Promise<void> {
    return this._prismaServices.addEmails(userEmails);
  }

  async unsubscribeNewsletter(userId: number): Promise<void> {
    return this._prismaServices.unsubscribe(userId);
  }
}