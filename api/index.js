import exampleRouter from './routes/route.js'
import express from 'express'

const app = express()
const port = 3000


app.use('/example', exampleRouter)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))