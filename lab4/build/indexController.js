"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("connect-flash");
const index = (req, res) => {
    res.render('home', { formMessage: req.flash('form') });
};
exports.default = {
    index
};
