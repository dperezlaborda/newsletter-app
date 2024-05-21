import { NextFunction, Request, Response } from 'express';
import { ImportRepository } from '../../application/repositories/import_resporitory';
import { IImportPresenter } from '../../domain/presenters/import_presenter';

export class ImportController {
  _importRepository: IImportPresenter = new ImportRepository();

  async importContacts(req: Request, res: Response, next: NextFunction) {
    try {
      await this._importRepository.importContacts();
      res.send('import contacts route');
    } catch (error) {
      next(error);
    }
  }

  async importImage(req: Request, res: Response, next: NextFunction) {
    try {
      await this._importRepository.importImage();
      res.send('import image route');
    } catch (error) {
      next(error);
    }
  };
}