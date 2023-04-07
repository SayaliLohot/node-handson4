const express = require('express')

const app = express()

const route = require('./route')

const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.use(route)

app.listen(3400, ()=>{
    console.log("server running")
})
