const express = require('express');
const app = express();
const port = 5000;
const nodemailer = require('nodemailer');
const config = require('./config.js')

app.get('/send', (req, res) => {
    const trasporter = nodemailer.createTransport({
        service: 'gmail',

    })
})

app.listen(port, () => {
    console.log(`Sever running on locoalhost:${port}`);
})