

const mongoose= require('mongoose');
let connection
const connectDB =(username, password)=>{
    console.log(username,password,' trying to connect DB')
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.vqz14mw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then((val)=>{
        console.log('DB connected')
        connection = val;
    }).catch((error)=>{
        console.log(error.message)
    })
}

module.exports ={connectDB,connection}
