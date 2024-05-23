import { IImportPresenter } from "../../domain/presenters/import_presenter";

export class ImportRepository implements IImportPresenter {
  async importContacts(csvFile: string): Promise<void> {
    console.log('import contacts repository');
  }

  async importImage(): Promise<void> {
    console.log('import image repository');
  }
}