import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import { AuthRoutes } from './routes/auth_routes';
import { ImportRoutes } from './routes/import_routes';
import { NewsletterRoutes } from './routes/newsletter_routes';
import { ErrorHandler } from './middleware/error_handler';

export class Server {
  app: Express;
  port: number | string | undefined;
  paths: { [key: string]: string } = {};

  constructor() {
    this.app = express();
    this.port = 8080 || 3000;
    this.paths = {
      auth: '/auth',
      import: '/import',
      newsletter: '/newsletter',
    };
    this.middlewares();
    this.routes();
    this.errorHandling();
    this.notFound();
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use( cors() );
  }

  routes() {
    this.app.use(this.paths.auth, AuthRoutes);
    this.app.use(this.paths.import, ImportRoutes);
    this.app.use(this.paths.newsletter, NewsletterRoutes);
  }

  errorHandling() {
    this.app.use(ErrorHandler);
  }

  notFound() {
    this.app.use((_req, res) => {
      res.status(404).json({ message: 'Route Not Found' });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run on http://localhost:${this.port}`);
    });
  }
}