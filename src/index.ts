import express from 'express'
const app = express()
app.use(express.json()) // middleware que transforma la red.body en un objeto json

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('pingeado')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})