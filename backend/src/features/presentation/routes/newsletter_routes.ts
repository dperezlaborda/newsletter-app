import express from "express";
import { NewsletterController } from "../controllers/newsletter_controller";

export const NewsletterRoutes = express.Router();
const _newsletterController = new NewsletterController();

NewsletterRoutes.post('/send', _newsletterController.sendNewsletter.bind(_newsletterController));
NewsletterRoutes.post('/unsubscribe', _newsletterController.unsubscribeNewsletter.bind(_newsletterController));
//TO-DO: VER SI SIRVE !
NewsletterRoutes.post('/subscribe', (req, res) => {
  res.send('subscribe route');
});



