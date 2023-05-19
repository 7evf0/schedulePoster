require("dotenv").config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const express = require("express");
const bodyParser = require("body-parser");

const App = express();
const jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

App.post("/whatsapp", urlencodedParser, (req, res) => {
    console.log(req.body);
    if(req.body.ButtonText){
        client.messages.create({
            from: "MGff127650d2a834f635267f3a44f58678",
            body: "Thank you for your interest! If you don't want to charge Tevfik with loooots of $$, do not write a message now!",
            to: req.body.From
        });
    }
    else{
    client.messages.create({
        contentSid: "HX6133d430ca9dead7821a8bb2f18e1c6e",
        from: "MGff127650d2a834f635267f3a44f58678",
        contentVariables: JSON.stringify({
            1: req.body.ProfileName
        }),
        body: "hey",
        to: req.body.From
    }); 
    }
    /* client.messages.create({
        from: "MGff127650d2a834f635267f3a44f58678",
        body: "I've received it! " + req.ProfileName,
        to: req.From
    }); */
});



App.listen(3000, () => {
    console.log("It has started on PORT 3000");
});

/* client.messages.create({
    from: "MGff127650d2a834f635267f3a44f58678",
    body: "I've received it!",
    to: "whatsapp:+905535090172"
}); */

/* client.messages.create({
    contentSid: process.env.CONTENT_SID,
    from: "MGff127650d2a834f635267f3a44f58678",
    messagingServiceSid: "MGff127650d2a834f635267f3a44f58678",
    contentVariables: JSON.stringify({
        1: "16.05.2023"
    }), 
    body: "hey",
    to: "whatsapp:+905535090172"
}).then(msg => console.log(msg.sid)); */

