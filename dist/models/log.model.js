"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logSchema = new mongoose_1.Schema({
    typeRequest: {
        type: String,
        required: true,
    },
    endPoint: {
        type: String,
        required: true,
    },
    body: {
        type: Object,
    },
    params: {
        type: Object,
    },
    typeResponse: {
        type: Number,
        required: true,
    },
    response: {
        type: Object,
        required: true,
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Logs', logSchema);
