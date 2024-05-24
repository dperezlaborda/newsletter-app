import { NextFunction, Request, Response } from 'express';
import { ImportRepository } from '../../application/repositories/import_resporitory';
import { IImportPresenter } from '../../domain/presenters/import_presenter';
import { PrismaServices } from '../../infrastructure/local/services/prisma_services';

export class ImportController {
  _importRepository: IImportPresenter = new ImportRepository(
    new PrismaServices()
  );

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
      console.log(error);
      next(error);
    }
  }

  async importImage(req: Request, res: Response, next: NextFunction) {
    try {
      if(!req.body.url){
        res.status(400).json({
          success: false,
          message: 'Url is not present or is invalid'
        })
      }else{
        await this._importRepository.importImage(req.body.url);
        res.status(200).json({ 
          success: true,
          message: 'Url attached successfully'
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}