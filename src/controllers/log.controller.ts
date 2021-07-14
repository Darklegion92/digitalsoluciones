import { Request, Response } from 'express'
import LogModel from '../models/log.model'
import XLSX from 'xlsx'

export const getLogs = async (req: Request, res: Response) => {
    try {
        const logs = await LogModel.find()
        res.status(200).send({ total: logs.length, data: logs })
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const generateExcel = async (req: Request, res: Response) => {
    try {
        const logs = await LogModel.find()

        let wb = XLSX.utils.book_new()
        wb.Props = {
            Title: "Informe Logs",
            Subject: "Informe",
            Author: "Backend Node",
            CreatedDate: new Date()
        };

        let data = XLSX.utils.json_to_sheet(logs, { header: ['typeRequest', 'endPoint', 'body', 'params', 'typeResponse', 'response'] })
        XLSX.utils.book_append_sheet(wb, data)
        res.setHeader('Content-Disposition', 'attachment; filename="download.xlsx');
        res.end(XLSX.write(wb, { type: "buffer", bookType: 'xlsx' }));
    } catch (error) {
        res.status(500).send({ error })
    }
}