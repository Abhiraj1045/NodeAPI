

const express =  require('express');
const path =  require('path')
const dotenv =  require('dotenv').config();
const bodyparser = require('body-parser');
const {connectDB} = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');


const app =  express();
const PORT =process.env.PORT || 3000;
const{DBUser,Password} = process.env
connectDB(DBUser,Password)

app.use(bodyparser.json({extended:false}))
app.get('/',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname,'./public','index.html'))
})

app.use('/api',require('./routes/loginRoutes'))

app.use(errorHandler)


app.listen(PORT,(req,res)=>{    console.log(`Server running on port ${PORT}`);})