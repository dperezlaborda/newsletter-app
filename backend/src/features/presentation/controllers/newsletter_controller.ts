import { NextFunction, Request, Response } from 'express';
import { INewsletterPresenter } from '../../domain/presenters/newsletter_presenter';
import { NewsletterRepository } from '../../application/repositories/newsletter_repository';

export class NewsletterController {
  _newsletterRepository: INewsletterPresenter = new NewsletterRepository();

  async sendNewsletter(req: Request, res: Response, next: NextFunction) {
    try {
      await this._newsletterRepository.sendNewsletter();
      res.send('send newsletter route');
    } catch (error) {
      next(error);
    }
  }

  async unsubscribeNewsletter(req: Request, res: Response, next: NextFunction) {
    res.send('unsubscribe route');
  }
}