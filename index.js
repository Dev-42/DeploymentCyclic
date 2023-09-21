const express = require('express')
require('dotenv').config()

const app = express()


app.get('/' , (req,res) => {
    res.send('Base point')
})
app.get('/blogs' , (req,res) => {
    res.send({status : 'ok' , data : 'Blogs data'})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})