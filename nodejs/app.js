const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('ว่าแล้วว่าต้องมา')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})