const OuthData = require('../model/outhSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegistration=async(req,res,next)=>{
    try {
        const{name,email,phone,password}=req.body;
        const emailExist = await OuthData.findOne({email})
        if(!emailExist){
            const mypassword = await bcrypt.hash(password,10)
            const fulldata = new OuthData({name,email,phone,password:mypassword})
            const data =await fulldata.save();
            res.status(201).json({message:'your registration successful',data})
        }else{
            res.status(401).json({message:'your email alrady exist'})
        }
    } catch (error) {
        next(error)
    }
}


const userLogin=async(req,res,next)=>{
    try {
        const{email,password}=req.body;
        const emailExist = await OuthData.findOne({email});
        if(emailExist){
        const match = bcrypt.compareSync(password, emailExist.password)
        if(match){
            const token = jwt.sign({id:emailExist._id,user:emailExist.name,email:emailExist.email},'mynameisshaber',{expiresIn:"1h"})
            res.status(200).json({message:'your login successful',user:emailExist,token})
        }else{
            res.status(401).json({message:'your password not exist'})
        }
        }else{
            res.status(401).json({message:'your email not exist'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports={userRegistration,userLogin}