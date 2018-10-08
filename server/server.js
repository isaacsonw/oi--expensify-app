const path = require('path')
const express = require('express')
const app = express()
const pathName = path.join(__dirname, '..', 'public')
const port = process.env.PORT  || 3000

app.use(express.static(pathName))

app.get('*', (req, res)  => {
    res.sendFile(path.join(pathName, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is running on port 3000!')
})