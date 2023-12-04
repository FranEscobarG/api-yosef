import express from 'express';
const router = express.Router();
import EmailSender from '../config/mail.js';


router.post('/enviar', async (req, res) => {
    const message = req.body;
    const emailSender = new EmailSender();
    emailSender.enviarCorreo(message.correocita, 'ramosmolina04@gmail.com', message.nombre, message.motivo);
    res.json({message: 'Correo Enviado'});
});


module.exports = router