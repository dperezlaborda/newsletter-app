export abstract class INewsletterPresenter {
  abstract sendNewsletter(subject: string, message: string): Promise<void>;
  abstract addEmail(userEmail: string): Promise<void>;
  abstract addEmails(userEmails: string[]): Promise<void>;
  abstract unsubscribeNewsletter(userId: number): Promise<void>;
}