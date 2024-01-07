const nodemailer = require('nodemailer');

const SendEmailUtility = async (emailTo, emailText, emailSubject) => {
 const transport = nodemailer.createTransport({
    host:'mail.gmail.com',
    port: 25,
    secure: false,
    auth: {
        user: "williamcarry7@gmail.com",
        pass: 'testest'
    }, tls: {
        rejectUnauthorized: false
    }
 });

 const mailOptions = {
    from: '<nazmulkst@gmail.com>',
    to: emailTo,
    subject: emailSubject,
    text: emailText
 }
 return await transport.sendMail(mailOptions);
}

module.exports = SendEmailUtility;