

const express =  require('express');
const Response = require('./models/response');

const app =  express();
const PORT =3000;

app.get('/',(req, res)=>{
    let response  = new Response();
    res.json(response)
})

app.listen(PORT,(req,res)=>{    console.log(`Server running on port ${PORT}`);})