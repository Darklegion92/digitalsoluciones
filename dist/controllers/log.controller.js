"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExcel = exports.getLogs = void 0;
const log_model_1 = __importDefault(require("../models/log.model"));
const xlsx_1 = __importDefault(require("xlsx"));
const getLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield log_model_1.default.find();
        res.status(200).send({ total: logs.length, data: logs });
    }
    catch (error) {
        res.status(500).send({ error });
    }
});
exports.getLogs = getLogs;
const generateExcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield log_model_1.default.find();
        let wb = xlsx_1.default.utils.book_new();
        wb.Props = {
            Title: "Informe Logs",
            Subject: "Informe",
            Author: "Backend Node",
            CreatedDate: new Date()
        };
        let data = xlsx_1.default.utils.json_to_sheet(logs, { header: ['typeRequest', 'endPoint', 'body', 'params', 'typeResponse', 'response'] });
        xlsx_1.default.utils.book_append_sheet(wb, data);
        res.setHeader('Content-Disposition', 'attachment; filename="download.xlsx');
        res.end(xlsx_1.default.write(wb, { type: "buffer", bookType: 'xlsx' }));
    }
    catch (error) {
        res.status(500).send({ error });
    }
});
exports.generateExcel = generateExcel;
