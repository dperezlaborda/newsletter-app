import { INewsletterPresenter } from "../../domain/presenters/newsletter_presenter";
import { PrismaServices } from "../../infrastructure/local/services/prisma_services";

export class NewsletterRepository implements INewsletterPresenter {
  private _prismaServices: PrismaServices;

  constructor(prismaServices: PrismaServices) {
    this._prismaServices = prismaServices;
  }

  async sendNewsletter(
    subject: string,
    message: string
  ): Promise<void> {
    return this._prismaServices.sendNewsletter(subject, message);
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