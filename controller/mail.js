const nodemailer = require('nodemailer');
const {email} = require("../config.json");

let controller = {};

controller.send = async (from, to, subject, html) => {
 try {
    let transporter = nodemailer.createTransport({
        host: email.host,
        port: email.porta,
        secure: true,
        auth: {
            user: email.usuario,
            pass: email.senha,
        }
    });

    const mailInfo = await transporter.sendMail({ from, to, subject, html});

    console.log("E-mail enviado com sucesso:  ", mailInfo.messageId);
} catch (erro) {
    console.log("Falha ao enviar e-mail:   " , erro);
    throw erro;
}
};

module.exports = controller;