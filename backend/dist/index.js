"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./features/presentation/server");
const server = new server_1.Server();
server.listen();
