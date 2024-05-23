import { NextFunction, Request, Response } from 'express';
import { ImportRepository } from '../../application/repositories/import_resporitory';
import { IImportPresenter } from '../../domain/presenters/import_presenter';

export class ImportController {
  _importRepository: IImportPresenter = new ImportRepository();

  async importContacts(req: Request, res: Response, next: NextFunction) {
    try {
      if(!req.body.csv){
        res.status(400).json({
          success: false,
          message: 'File is not present or is invalid'
        })
      }else{
        const cvsString = req.body.csv;
        await this._importRepository.importContacts(cvsString);
        res.status(200).json({
          success: true,
          message: 'File load successfully'
        })
      }
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