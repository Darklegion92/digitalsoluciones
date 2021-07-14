"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_controller_1 = require("../controllers/log.controller");
const router = express_1.Router();
/**
 * @swagger
 * tags:
 *  name: logs
 *  description: Gestión de logs
 */
/**
 * @swagger
 * /logs:
 *  get:
 *      summary: Obtiene lista de logs
 *      tags: [logs]
 *      responses:
 *          200:
 *              description: Lista de logs
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              total:
 *                                  type: number
 *                                  description: Total de registros
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          _id:
 *                                              type: string
 *                                              description: indice de los logs
 *                                          typeRequest:
 *                                              type: string
 *                                              description: tipo de request
 *                                          endPoint:
 *                                              type: string
 *                                              description: endpoint consumido
 *                                          typeResponse:
 *                                              type: string
 *                                              description: código de la respuesta
 *                                          response:
 *                                              type: object
 *                                              description: contenido de la respuesta enviada al usuario
 *                                          createdAt:
 *                                              type: date
 *                                              description: fecha de creación del registro
 *                          example:
 *                              total: 1
 *                              data:
 *                                  _id: 60eef727a6c3b54380916776
 *                                  typeRequest: DELETE
 *                                  endPoint: /%7Bid%7D
 *                                  typeResponse: 400,
 *                                  response:
 *                                      message: Usuario eliminado correctamente
 *                                  createdAt: 2021-07-14T14:39:35.980Z
 *
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.get('/', log_controller_1.getLogs);
/**
 * @swagger
 * /logs/generateExcel:
 *  get:
 *      summary: Obtiene lista de logs
 *      tags: [logs]
 *      responses:
 *          200:
 *              description: Lista de logs
 *              content:
 *                  aplication/buffer:
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.get('/generateExcel', log_controller_1.generateExcel);
exports.default = router;
