const nodemailer=require('../../config/nodeMailer');
module.exports.sendmail=function(){
var template=nodemailer.renderTemplete('data','/signupmailer.ejs');
nodemailer.transporter.sendMail({

    from: 'udaysonubakka123@gmail.com', // sender address
    to: 'udaysonubakka123@gmail.com', // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: template // html body
  },function(err){
      console.log(err,'this is in error pageadfadsfasdf');
  });}