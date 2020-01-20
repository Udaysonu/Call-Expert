const Expert=require('../models/expert')



module.exports.updateexpert=async function(req,res){
    let user= await Expert.findById(req.user.id)
   try{
    Expert.uploadedAvatar(req,res,function(err){
        console.log(req.file);
         
            user.name=req.body.name;
            user.password=req.body.password;
            user.phone=req.body.phone;
            if(req.file){
                user.avatar=Expert.avatarPath+'/'+req.file.filename;
            }
            user.save();
            console.log(user);
         
    })
   }catch(err){
       console.log(err,'asdfasdfasdf');
   }
    
}