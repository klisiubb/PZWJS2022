"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    console.log("GET");
    res.send("OK GET");
});
app.put("/", (req, res) => {
    console.log("PUT");
    res.send("OK PUT");
});
app.post("/", (req, res) => {
    console.log("POST");
    res.send("OK POST");
});
app.delete("/", (req, res) => {
    console.log("DELETE");
    res.send("OK DELETE");
});
