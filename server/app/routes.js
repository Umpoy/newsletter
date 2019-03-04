module.exports = app => {
    app.post('/send', (req, res) => {
        console.log('req: ', req.body);
        // console.log(res);
        //console.log('res: ', res);
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: config.email,
        //         pass: config.pass
        //     }
        // });

        // const mailOptions = {
        //     from: config.email,
        //     to: config.email, // change this to users email in the future
        //     subject: "GEM Newsletters",
        //     html: "<h1>Hello World</h1><p>We sent this email using nodemailer 🤓</p>"
        // }

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email send: ' + info.response);
        //     }
        // })
    })
}