const express = require('express')
const app=express()

app.get('/',(req,res) => {
    res.send("salut " + req.ip)
})

app.get('/hello', (req,res) => {
    res.send("hello")
})

app.listen(8080,() => {
    console.log("serveur actif sur le port 8080")
})
