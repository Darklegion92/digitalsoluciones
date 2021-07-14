"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Api Rest',
            version: '1.0.0',
            description: 'Api Rest Information',
        },
        servers: [
            {
                url: 'http://localhost:3001'
            }
        ]
    },
    apis: ['./src/routes/*.ts']
};
