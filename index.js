require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('ZAckbelburry')
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at belfurry.com</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>youtube</h1>')
})

app.listen(process.env.PORT,() => {
  console.log(`Example app listening on port ${port}`)
})