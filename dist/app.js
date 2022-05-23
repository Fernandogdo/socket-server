"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
//middlewares
// app.use(morgan('dev'));
// app.use(cors());
app.use(express_1.default.json());
//routes
app.use('/api', router_1.default);
//this folder for this app will be used to store public files
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json(res.error(err.status || 500));
});
exports.default = app;
