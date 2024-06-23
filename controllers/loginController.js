const {connection} =require('../config/db')

const login = (req, res)=>{
    const {EmailID,Password} = req.body;
    if(!EmailID || !Password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:'UserLogged in for'+EmailID +" "+Password})
}

const signup = (req, res)=>{
    const {EmailID,Password,Name} = req.body;
    if(!EmailID || !Password || !Name){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:'REQUEST GOT FOR SIGNUP'})
}


module.exports = {login,signup}