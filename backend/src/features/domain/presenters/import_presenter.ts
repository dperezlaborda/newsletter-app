export abstract class IImportPresenter {
  abstract importContacts(): Promise<void>;
  abstract importImage(): Promise<void>;
};