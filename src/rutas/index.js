const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/enviar-correo', async (req, res) =>{
    const{nombrecompleto, email, telefono, affair, mensaje} =req.body;

    contentHTML = `
    <h1>Información del Usuario</h1>
    <ul>
        <li>Usuario: ${nombrecompleto} </li>
        <li>Email: ${email} </li>
        <li>Telefono: ${telefono} </li>
        <li>Motivo: ${affair} </li>
        
    </ul>
    <p> ${mensaje} </p>
    `;
    const transporter = nodemailer.createTransport({
        host:'mail.tudatapartner.cl',
        port:26,
        secure:false,
        auth:{
            user:'info@tudatapartner.cl',
            pass:'71977feff'
        },
        tls:{
            rejectUnauthorized:false
        }


    });

    const info = await transporter.sendMail({
        from:"'Servidor Tu Data Partner' <info@tudatapartner.cl>",
        to:'tudatapartner@gmail.com',
        subject:'formulario de contacto',
        html: contentHTML
    });
    console.log('mensaje enviado', info.messageId)
        res.send('/success.html');
});

module.exports = router;
