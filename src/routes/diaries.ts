import express from 'express' // ESModules
import * as diaryServices from '../services/diaryServices'
// const express = require('express') // CommonJS

const router = express.Router()

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(Number(req.params.id))
    return diary ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (_req, res) => {
    res.send('creating diary')
})

export default router