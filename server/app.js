const express = require('express');
const connect = require('./db/db')

// MongoDB Connection
connect();

//server connection
const app = express();

app.get('/', (req, res)=>{
    res.send("Yeah its working!!")
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server is running at port ${port}!!`);
})