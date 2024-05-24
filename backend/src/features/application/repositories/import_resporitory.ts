import { IImportPresenter } from "../../domain/presenters/import_presenter";
import { PrismaServices } from "../../infrastructure/local/services/prisma_services";

export class ImportRepository implements IImportPresenter {
  private _prismaServices: PrismaServices;

  constructor(prismaServices: PrismaServices) {
    this._prismaServices = prismaServices;
  }

  //TO-DO ADD LIBRARY TO READ CSV FILE
  async importContacts(csvFile: string): Promise<void> {
    return this._prismaServices.importContacts(csvFile);
  }

  async importImage(): Promise<void> {
    return this._prismaServices.importImage();
  }
}