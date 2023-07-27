const User = require('../model/studentSchema')

const getAllData = async(req,res,next)=>{
  try {
    const fulldata = await User.find({});
   res.status(200).json({message:'this is your all data',fulldata})
  } catch (error) {
    next(error)
  }
}

const getSingalData = async(req,res,next)=>{
    try {
      const singaldata = await User.findById(req.params.id,req.body)
     res.status(200).json({message:'this is your singal data',singaldata})
    } catch (error) {
      next(error)
    }
  }
  

const createData = async(req,res,next)=>{
    try {
      const {name,email,home,taka,author}=req.body;
      const fulldata = new User({name,email,home,taka,author})
      const mydata = await fulldata.save();
      res.status(201).json({message:'your data successful added',data:mydata})
    } catch (error) {
      next(error)
    }
  }

  const updataData = async(req,res,next)=>{
    try {
      const updataData = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({message:'your data successful updated',updataData})
    } catch (error) {
      next(error)
    }
  }

  const deleteData = async(req,res,next)=>{
    try {
      await User.findByIdAndDelete(req.params.id,req.body)
      res.status(200).json({message:'your data successful deleted'})
    } catch (error) {
      next(error)
    }
  }
  

module.exports={getAllData,createData,updataData,getSingalData,deleteData}