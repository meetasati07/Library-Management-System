"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
const MONGO_USERNAME = process.env.MONGO_USERNAME || ``;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ``;
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/librarydb`;
const PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;
const ROUNDS = process.env.SERVER_ROUNDS ? Number(process.env.SERVER_ROUDNS) : Math.floor(Math.random() * 11);
exports.config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT,
        rounds: ROUNDS
    }
};
