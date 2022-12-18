const dotenv=require('dotenv');
dotenv.config({path:"config.env"});
const DB=process.env.DATABASE;
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(DB).then(()=>{
    console.log("Connection to database succesfull");
}).catch((err)=>{
    console.log("error:" + err)
})