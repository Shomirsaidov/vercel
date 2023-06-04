const express = require('express')
const app = express()

app.get('/api', (req,res) => {
    res.json({message: 'ALLAHU AKBAR !'})
})

app.get('/api/:message', (req,res) => {
    res.json({message: req.params['message']})
})

app.listen(4444, () => console.log('Server started successfully !'))
