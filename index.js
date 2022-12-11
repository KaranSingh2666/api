const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const path = require('path')
const port = process.env.PORT || 3000
const createimg = require('./routes/createImgroute')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/openai',createimg)


app.listen(port, () => console.log(` app listening on port http://localhost:${port}!`))

// module.exports={openai}