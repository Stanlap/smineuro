import express from 'express'
const app = express()
import 'dotenv/config'
// app.use(express.json());
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port: http://localhost:${port}`)
})