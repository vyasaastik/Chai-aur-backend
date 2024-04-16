

require('dotenv').config()
const express = require('express')  // require module syntax //
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('You are on twitter')
})

app.get('/login',(req,res)=>{
  res.send('<h1>YOU CAN CONNECT WITH DATABASE NOW</h1>')  // hot reloading // 
})

app.get('/youtube',(req ,res)=>{
 res.send('<h2>HEY YOU ARE ON MONGOOSE</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})