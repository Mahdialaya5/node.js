var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mahdibenalaya566@gmail.com',
    pass: 'dkkninnillqkiqmc'
  }
});

var mailOptions = {
  from: 'mahdibenalaya566@gmail.com',
  to: 'mahdibenalaya566@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});