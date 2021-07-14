"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const log_routes_1 = __importDefault(require("./routes/log.routes"));
const log_middleware_1 = require("./middlewares/log.middleware");
const swagger_config_1 = __importDefault(require("./config/swagger.config"));
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//initializations
const app = express_1.default();
const swaggerDocs = swaggerJsDoc(swagger_config_1.default);
//settings
app.set('port', process.env.PORT || 3001);
//middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//routes
app.use('/users', user_routes_1.default, log_middleware_1.saveLogs);
app.use('/logs', log_routes_1.default);
exports.default = app;
