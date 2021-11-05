require('dotenv').config()
const express = require('express')
var cors = require('cors')
const port = process.env.PORT


const app = express()
app.use(express.json())
app.use(cors())

app.get('/ranking', (req, res) => { return res.status(200).json([{ name: 'Vinicius Monteiro Orlandi', pontuation: 23 }]) })


app.get('/', (req, res) => res.json({ msg: "Ola Mundo" }))

app.listen(port, (req, res) => { console.log("API rodando na porta:" + port) })

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}