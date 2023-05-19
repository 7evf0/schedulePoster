require("dotenv").config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const prompt = require('prompt-sync')();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const returnMail = require("./emailTemplate.js");
const returnAcceptHTML = require("./acceptHTML.js");

//  REST API

sendMessage("whatsapp:+905535090172");

//  MAIN RESPOND PROGRAM

async function respond(req){
    const msg = req.Body;
    const username = req.ProfileName;
    const userPhone = req.From;
    const mediaType = req.MediaContentType0;

    if(mediaType && mediaType === "image/jpeg"){
        const mediaUrl = req.MediaUrl0;
        await sendMessage("Thanks for uploading your schedule! You will get a notification when your schedule is confirmed.", userPhone);
        await sendEmail(username, msg , mediaUrl, userPhone);
    }
};

// SUBPROGRAMS

async function sendMessage(to){
    await client.messages
            .create({
                from: 'whatsapp:+14155238886',
                to: to,
                contentSid: "HXe08123f9476ad2ac1ba8b8629b7c4d0d",
                messagingServiceSid: "MGff127650d2a834f635267f3a44f58678"
            });
}

async function sendEmail(username, text=username, image=null, userPhone){
    var socket = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var email = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `${username} : AUTHENTICATION MAIL ON SCHEDULE CONFIGURATION`,
        html: returnMail(text, image, process.env.CURRENT_HOST, userPhone)
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
