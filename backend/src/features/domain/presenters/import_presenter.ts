export abstract class IImportPresenter {
  abstract importContacts(csvFile: string): Promise<void>;
  abstract importImage(imageUrl: string): Promise<void>;
};