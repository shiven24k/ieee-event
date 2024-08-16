// server.js
//to start the server first start react app and then start server on same port
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use your email provider
    auth: {
      user: 'kashyapshiven2002@gmail.com',
      pass: 'pxhqrrgrjkqmfzii',
    },
  });

  //mail format
  const mailOptions = {
    from: email,
    to: 'kashyapshiven2002@gmail.com',
    subject: 'ICETIS 2025 Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
