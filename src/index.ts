import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) // middleware que transforma la red.body en un objeto json

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('pingeado' + "Juan 2")
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})