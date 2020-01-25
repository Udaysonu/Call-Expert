const Expert=require('../models/expert');
const Location=require('../models/locations');

module.exports.updateexpert=async function(req,res){
    let user= await Expert.findById(req.user.id)
    
   try{
       
        Expert.uploadedAvatar(req,res,function(err){


            if(req.body.location==req.body.locationold && req.body.fieldold==req.body.field)
            {
            console.log(req.file);
         
            user.name=req.body.name;
            user.password=req.body.password;
            user.phone=req.body.phone;
            user.location=req.body.location;
                        if(req.file){
                                         user.avatar=Expert.avatarPath+'/'+req.file.filename;
                                     }
                         user.save();
                         console.log(user);
            return res.redirect('back');
            }
            else{
                 user.name=req.body.name;
                  user.password=req.body.password;
                 user.location=req.body.location;
                 user.field=req.body.field;
                 user.phone=req.body.phone;
                  if(req.file){
                          user.avatar=Expert.avatarPath+'/'+req.file.filename;
                              }
                  user.save();
            }
            console.log(req.body.locationold,req.body.location)
            Location.findOne({name:req.body.locationold},function(err,location){
            

                if(req.body.fieldold!='None'){
                    let field=req.body.fieldold.toLowerCase();
                var user = location[field];
                console.log(user,field);
                var i=0;
                for(one of user){
                    
                    console.log(one,req.user.id);
                    
                    
                    if(one==req.user.id){
                        console.log('found',one);
                        user.splice(i,1);
                        break;                        
                    }
                    i++;
                }
                location.save();
                }
             
            Location.findOne({name:req.body.location},function(err,location){
                if(location){
                    let field=req.body.field;
                    let field2=field.toLowerCase();
                    console.log(req.user.field,field,field2,location[field2])
                    location[field2].push(req.user.id);
                    location.save();                         
                }else{
                    Location.create({name:req.body.location,pin:req.body.pin},function(err,location){
                        let field=req.body.field
                        let field2=field.toLowerCase();
                        console.log(field,field2);
                        console.log(user,req.body.field);
                        location[field2].push(req.user.id);
                        location.save();   
                    })
                }

        })
            })
    
         return res.redirect('back')
    })
   }
   catch(err)
   {
       console.log(err,'asdfasdfasdf');
   }
    
}