export abstract class INewsletterPresenter {
  abstract sendNewsletter(): Promise<void>;
  abstract unsubscribeNewsletter(): Promise<void>;
}