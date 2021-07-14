import { Router } from 'express'
import { generateExcel, getLogs } from '../controllers/log.controller'

const router = Router()

router
    .get('/', getLogs)
    .get('/generateExcel', generateExcel)

export default router