import { NextFunction, Request, Response } from 'express';
import { INewsletterPresenter } from '../../domain/presenters/newsletter_presenter';
import { NewsletterRepository } from '../../application/repositories/newsletter_repository';
import { PrismaServices } from '../../infrastructure/local/services/prisma_services';
import { EmailSenderService } from '../../infrastructure/local/services/email_sender_service';

export class NewsletterController {
  _newsletterRepository: INewsletterPresenter = new NewsletterRepository(
    new PrismaServices(),
    new EmailSenderService()
  );

  async sendNewsletter(req: Request, res: Response, next: NextFunction) {
    try {
      if(!req.body.subject || !req.body.message) {
        res.status(400).json({ 
          success: false,
          message: 'Subject or message is not present or is invalid'
        });
      }else{
        await this._newsletterRepository.sendNewsletter(
          req.body.subject,
          req.body.message
        );
        res.status(200).json({ 
          success: true,
          message: 'Newsletter sent successfully'
        });
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  }

  async addEmail(req: Request, res: Response, next: NextFunction) {
    try {
      if(!req.body.email) {
        res.status(400).json({ 
          success: false,
          message: 'Email is not present or is invalid'
        });
      }else{
        await this._newsletterRepository.addEmail(req.body.email);
        res.status(200).json({
          success: true,
          message: 'Email added successfully'
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async addEmails(req: Request, res: Response, next: NextFunction) {
    try {
      if(!req.body.emails || !Array.isArray(req.body.emails)) {
        res.status(400).json({ 
          success: false,
          message: 'Emails are not present or are invalid'
        });
      }else{
        await this._newsletterRepository.addEmails(req.body.emails);
        res.status(200).json({
          success: true,
          message: 'Emails added successfully'
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async unsubscribeNewsletter(req: Request, res: Response, next: NextFunction) {
    try {
      if(!req.query.id || isNaN(parseInt(req.query.id as string))) {
        res.status(400).json({ 
          success: false,
          message: 'User id is not present or is invalid'
        });
      }else{
        await this._newsletterRepository.unsubscribeNewsletter(
          parseInt(req.query.id as string)
        );
        res.status(200).json({ 
          success: true,
          message: 'Unsubscribed successfully'
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
