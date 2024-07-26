const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:'aishwaryageed4@gmail.com',
            pass:'gjqxjapmicbmfzpw'
        }
    }
);

function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    });  
    console.log("Email Sent"); 
}

sendMail("aishwaryageed4@gmail.com","Node Js Mail Testing","hello this is a text mail");