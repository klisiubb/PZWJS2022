"use strict";
//3. Za pomocą klienta http połącz się z dowolną stroną i wyświetl w konsoli wynik
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const response = (0, node_http_1.get)('ath.edu.pl');
console.log(response);
