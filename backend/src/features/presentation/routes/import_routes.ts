import express from "express";
import { ImportController } from "../controllers/import_controller";

export const ImportRoutes = express.Router();
const _importController = new ImportController();

ImportRoutes.post('/contacts', _importController.importContacts.bind(_importController));

ImportRoutes.post('/image', _importController.importImage.bind(_importController));