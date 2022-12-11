"use strict";
//1. Za pomocą modułu url zamień ścieżkę otrzymaną /nowy na /serwer1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_url_1 = __importDefault(require("node:url"));
node_url_1.default.resolve("/nowy", "/serwer1");
