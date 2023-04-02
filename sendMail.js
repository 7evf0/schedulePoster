const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");

const App = express();

App.get("/configure", async (req, res) => {
    console.log("Entered");
    res.send("Came out here!");
});

function sendEmail(){
    var socket = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "tevfikemresungur@gmail.com",
            pass: "xyfhzwgibyuialqz"
        }
    });

    var email = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `: AUTHENTICATION MAIL ON SCHEDULE CONFIGURATION`,
        html: `<!doctype html>
        <html>
          <head>
          </head>
          <body>
            
          </body>
        </html>`
    };

    socket.sendMail(email, (err, info) => {
        if(!err){
            console.log("Email sent succesfully!");
        }
        else{
            console.error(err);
        }
    });
};

App.listen(3000, () => {
    console.log("It is on");
});

sendEmail();