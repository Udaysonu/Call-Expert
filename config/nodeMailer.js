
const nodemailer = require("nodemailer");
const path=require('path');
const ejs=require('ejs');
 
// async..await is not allowed in global scope, must use a wrapper
 
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
 

  // create reusable transporter object using the default SMTP transport
  
  let transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:'udaysonubakka123@gmail.com', // generated ethereal user
      pass: 'udayyadusonu1' // generated ethereal password
    }
  });

  // send mail with defined transport object
  
  let renderTemplete=(data,relativepath)=>{
    ejs.renderFile( path.join(__dirname,'../views/mailer/signupmailer.ejs'),data,function(err,date){
      if(err){
        console.log(err);
      }else{
        return data;
      }
    })


  }


  
  module.exports={transporter:transporter,
                  renderTemplete:renderTemplete};
 

 

 