const express = require('express');
const router = express.Router();
require('../database/conn');
const User= require('../model/userSchema');

router.post('/adduser',async(req,res)=>{
    const {name,email,gender,status}=req.body;

    try{
        const userExist=await User.findOne({email:email});
            if(userExist) res.status(422).send("User already exists");

            const user=new User({name,email,gender,status});
            await user.save();
                return res.status(201).send("User register succesfully");
        }catch(err){
        console.log(err);
    }
});

module.exports=router;