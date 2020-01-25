const express=require('express');
const app=express();
const path=require('path');
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const passport=require('passport');
const passportLocal=require('./config/passport-local');
const session=require('express-session');
const flash = require('connect-flash'); 
const cookieParser=require('cookie-parser');



app.use('/uploads',express.static(__dirname+'/uploads'))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static('assets'));
app.use(express.urlencoded({extended:true}));
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)
app.use(expressLayouts);
app.use(session({
    name:'codeial',
    secret:'udaykiran'     
}));
app.use(cookieParser());

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(require('./middlewares/flash').setFlash);

app.use('/',require('./routers/index'));

app.listen(8000,function(err){
    if(err){
        return    console.log('Error in starting the server');
    }
    return console.log("Server started successfully :)");
})