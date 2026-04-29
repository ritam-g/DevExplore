import express from 'express'
const app = express()



app.get('/', (req, res) => {
    return res.json({ message: 'Hello from the server!' })
})


app.post('/incident', (req, res) => {
    return res.json({ message: 'Incident received' })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})