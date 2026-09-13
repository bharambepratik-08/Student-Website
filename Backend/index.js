const  connectToMongo = require('./db');
const express = require('express');
const app = express()
const port = 5000;
app.disable('etag');  
const cors = require('cors')

app.use(cors())

app.use(cors({
  origin: "http://localhost:3000",
  exposedHeaders: ["auth-token"],
}))

connectToMongo ();

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/task', require('./routes/tasks')) 
app.use('/api/focus', require('./routes/focus'))
app.use('/api/goals', require('./routes/goals'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})