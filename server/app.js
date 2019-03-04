const express = require('express');
const app = express();
const port = 5000;
const nodemailer = require('nodemailer');
const config = require('./config.js')

app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.email,
            pass: config.pass
        }
    });

    const mailOptions = {
        from: config.email,
        to: config.email, // change this to users email in the future
        subject: "GEM Newsletters",
        html: "<h1>Hello World</h1><p>We sent this email using nodemailer 🤓</p>"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email send: ' + info.response);
        }
    })
})

app.listen(port, () => {
    console.log(`Sever running on locoalhost:${port}`);
})