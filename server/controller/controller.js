const User= require('../model/userSchema');


//create and save new user
exports.create=async(req,res)=>{
    //validate request

    try{
        if(!req.body) return res.status(400).send({message:"content cannot be empty"});
    
    const {name,email,gender,status}=req.body;
    //new user
    const user=new User({name,email,gender,status});
    //save user in database
    await user.save();
    res.status(201).redirect('/adduser');
    }catch(err){
        res.status(500).send({message:err.message ||"error in create"});
    }
}

//retrive and return alluser/single user
exports.find=async(req,res)=>{
    try{
        if(req.query.id){
            const id=req.query.id;
            const data=await User.findById(id);
            !data?res.status(404).send("no user with id "+id):res.send(data)
        }else{
            const data=await User.find();
            !data?res.status(404).send("no users"):res.send(data)
        }
        
    }catch(err){
        res.status(500).send({message:err.message ||"error in find"})
    }
}

//update a new user by user id
exports.update=async(req,res)=>{
    if(!req.body)return res.status(400).send({message:"data to update cannot be empty"});

    const id=req.params.id;
    try{
        const updateUserData= await User.findByIdAndUpdate(id,req.body);    
        !updateUserData?res.status(404).send("user not found"):res.send(updateUserData);
    }catch(err){
        res.status(500).send({message:err.message ||"error in update"})
    }
}

//delete a user with specified user id
exports.delete=async(req,res)=>{
    const id=req.params.id;
    try{
        const deleteUserData= await User.findByIdAndDelete(id);

        !deleteUserData?res.status(404).send("user not found"):res.send("user deleted successfuly")
    }catch(err){
        res.status(500).send({message:err.message ||"error in delete"})
    }
}