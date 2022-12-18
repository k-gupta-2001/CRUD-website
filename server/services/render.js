const axios=require('axios')

exports.homeRoutes=async(req,res)=>{
    try{
        const data=await axios.get('http://localhost:3000/api/users');
        res.render('index',{users:data.data});
    }catch(err){
        console.log(err);
    }
}
    
exports.add_user=(req,res)=>{
    res.render('add_user');
}
exports.update_user=async(req,res)=>{
    try{
        const data=await axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}});
        res.render('update_user',{user:data.data});
    }catch(err){
        res.send(err);
    }
}