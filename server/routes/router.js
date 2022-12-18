const express=require('express');
const route=express.Router();

const service=require('../services/render');
const controller=require('../controller/controller')

/** 
 @description Root Router
 @method GET/
*/
route.get('/',service.homeRoutes);
/** 
 @description Add User
 @method GET/adduser
*/
route.get('/add-user',service.add_user)
/** 
 @description Update User
 @method GET/updateuser
*/
route.get('/update-user',service.update_user)

//api
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);




module.exports=route;