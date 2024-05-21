"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.paths = {};
        this.app = (0, express_1.default)();
        this.port = 8080 || 3000;
        this.paths = {
            auth: '/api/auth',
            contacts: '/api/contacts',
        };
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.paths.auth, require('./auth/routes'));
        this.app.use(this.paths.contacts, require('./contacts/routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run on http://localhost:${this.port}`);
        });
    }
}
exports.Server = Server;
