import { INewsletterPresenter } from "../../domain/presenters/newsletter_presenter";

export class NewsletterRepository implements INewsletterPresenter {
  async sendNewsletter(): Promise<void> {
    console.log('send newsletter repository');
  }

  async unsubscribeNewsletter(): Promise<void> {
    console.log('unsubscribe newsletter repository');
  }
}