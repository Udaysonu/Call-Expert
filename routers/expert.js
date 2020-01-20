const express=require('express');
const router=express.Router();
 
const expertController=require('../controllers/expertcontroller')


router.get('/updatepage',expertController.updatepage);



module.exports=router