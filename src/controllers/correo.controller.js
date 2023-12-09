var nodemailer = require("nodemailer");

const sendEmail = function (req, res) {
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "tfm.logistics.sl@gmail.com",
        pass: "lavs tgxj okjb coov" 
    }
  });
  const destinatario = req.body.destinatario;
  const asunto = req.body.asunto;
  const contenido = req.body.contenido;
  // Definimos el email
  var mailOptions = {
    from: "tfm.logistics.sl@gmail.com",
    to: destinatario,
    subject: asunto,
    text: contenido,
  };
  // Enviamos el email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(500, err.message);
    } else {
      console.log("Email sent");
      res.status(200).jsonp(req.body);
    }
  });
};
module.exports = {
  sendEmail,
};
