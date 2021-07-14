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
exports.saveLogs = void 0;
const log_model_1 = __importDefault(require("../models/log.model"));
const saveLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, error, method, path, body, params, json, typeResponse } = req;
    const response = Object.assign(Object.assign({}, json), { message, error });
    const dataLog = {
        typeRequest: method,
        endPoint: path,
        body,
        params,
        typeResponse,
        response,
    };
    const newLog = new log_model_1.default(dataLog);
    try {
        yield newLog.save();
        res.status(typeResponse).send(response);
    }
    catch (error) {
        res.status(500).send({ error });
    }
});
exports.saveLogs = saveLogs;
