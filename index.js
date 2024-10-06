const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })

  app.get('/', (req, res) => {
    res.send( `<html>
    <head>
      <title>Eduardo Ramos Personal Website</title>
    </head>
    <body>
      <h1>Eduardo Ramos</h1>
      <p>Welcome to my server.</p>
    </body>
  </html>`)
  })
