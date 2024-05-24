import { IImportPresenter } from "../../domain/presenters/import_presenter";
import { PrismaServices } from "../../infrastructure/local/services/prisma_services";

export class ImportRepository implements IImportPresenter {
  private _prismaServices: PrismaServices;

  constructor(prismaServices: PrismaServices) {
    this._prismaServices = prismaServices;
  }

  async importContacts(csvFile: string): Promise<void> {
    return this._prismaServices.importContacts(csvFile);
  }

  async importImage(imageUrl: string): Promise<void> {
    return this._prismaServices.importImage(imageUrl);
  }
}