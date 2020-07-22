const nodemailer = require("nodemailer");
const express = require('express');
// creating an express instance
// const cookieSession = require('cookie-session')
// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();

// getting the local authentication type
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

//Handle production
if(process.env.NODE_ENV === 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
const port  = 8080;

let email = "";
let name = "";
let message = "";

app.post('/contact', (req, res) => {
    email = req.body.email;
    name = req.body.name;
    message = req.body.message;
    res.send('Getting info');
    sendMail();
});


function sendMail(){
    let fromMail = "ambika.miglani@gmail.com";
    let toMail = "ambika_miglani@brown.edu";
    let text = `${message}`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: toMail,
            pass: 'tazomilo',
        }
    });

    let mailOptions = {
        to: "bbyfacemedia@gmail.com",
        subject: `New Message from ${name}. Their email is ${email}`,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, response) => {
        if(error) {
            console.log(error);
        }
    });


}

app.listen(port, () =>
    console.log('app listening')
);
