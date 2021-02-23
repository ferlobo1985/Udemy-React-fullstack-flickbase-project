const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service:"Gmail",
    secure: true,
    auth:{
        user: 'email',
        pass:'pass'
    }
});

const contactMail = async(contact) => {
    try{

    } catch(error){

    }
}

module.exports = {
    contactMail
}
