
require('dotenv').config()

const express = require('express')
const mongoose= require('mongoose')
const goalRoutes = require("./routes/goalsRoutes")

const app = express()


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/goals', goalRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then (() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch ((error) => {
        console.log(error)
    })

process.env