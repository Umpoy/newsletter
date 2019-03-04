const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const nodemailer = require('nodemailer');
const config = require('./config.js')

app.use(cors());
app.use(express.json());

require('./app/routes.js')(app);



app.listen(port, () => {
    console.log(`Sever running on locoalhost:${port}`);
})