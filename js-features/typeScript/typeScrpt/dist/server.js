"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port = 7500) {
        this.port = port;
    }
    start(port) {
        const app = express_1.default();
        app.get('/', (req, res) => {
            res.send(console.log('Hello every body'));
        });
        app.listen(this.port, (err, result) => {
            if (err)
                throw err;
            console.log(`Server is listened to ${this.port}`);
        });
    }
}
module.exports = Server;
