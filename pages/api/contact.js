export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    },
    secure: true
  });

  const mailData = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Konu ${req.body.subject}`,
    text: `İsim : ${req.body.name}\n Email :<${req.body.email}>\n Konu :   ${req.body.subject} \n Mesaj : ${req.body.message}message}`
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send('success');
}
