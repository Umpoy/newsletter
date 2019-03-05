const nodemailer = require('nodemailer');
const config = require('../config')

module.exports = app => {
    app.post('/send', (req, res) => {
        console.log(req.body)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.email,
                pass: config.pass
            }
        });

        const mailOptions = {
            from: config.email,
            to: req.body.email,
            subject: "GEM Newsletters",
            html: "<div class='email' style='text-align: center;font-family: sans-serif;background-color: #000000;max-width: 800px;margin: 0 auto;'><img src='https://img1.wsimg.com/isteam/ip/c2712dd7-0bb9-4d58-969a-76ee3cff50ac/logo/6e4c6ab0-a4b3-4a46-8fa7-18db4ed2ad19.png/:/rs=h:100/qt=q:95'style='text-align: center;font-family: sans-serif;max-width: 85%;margin: 10px 0;left: 0;'><div class='container' style='text-align: center;font-family: sans-serif;max-width: 500px;margin: 0 auto;padding: 50px 0;background: white;'><p class='hide' style='text-align: center;font-family: sans-serif;padding-left: 15px;padding-right: 15px;display: none;'>Stylish, functional, and ready for anything.</p><img src='https://isteam.wsimg.com/neb/obj/NzcxMkIyMTI5N0U4QjBENzVEQjU6NDVhMjY4NzlkNGFmZjc3YWEyMTBkNDQ3MTRiZmYyZGQ6Ojo6OjA=/:/rs=w:600,h:600' style='text-align: center;font-family: sans-serif;max-width: 85%;'><h3 style='text-align: center;font-family: sans-serif;'>PROTECH BACKPACK</h3><p style='text-align: center;font-family: sans-serif;padding-left: 15px;padding-right: 15px;'>This pack was designed to be the best backpack for all competitive card game players alike. Carry it all from multiple decks, binders, calculators, and your favorite GEM Cloth Play Mat. Elevate your game with ProTech, the ultimate TCG backpack. </p><a href='https://gemplaymats.com/shop?olsPage=products%2Fprotech-backpack' style='text-align: center;font-family: sans-serif;text-decoration: underline;display: inline-block;background: black;color: rgb(198, 198, 198);padding: 10px 20px 10px;border-radius: 5px;'>Shop Now ></a></div><div class='footer' style='text-align: center;font-family: sans-serif;max-width: 500px;margin: 0 auto;padding: 50px 0;font-size: 9px;color: rgb(198, 198, 198);padding-left: 25px;padding-right: 25px;'>Want to change how you receive these emails? You can<a href='#' style='text-align: center;font-family: sans-serif;'>update your preferences</a> or<a href='#' style='text-align: center;font-family: sans-serif;'>unsubscribe from this list</a>.</div></div>"
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email send: ' + info.response);
            }
        })
    })
}