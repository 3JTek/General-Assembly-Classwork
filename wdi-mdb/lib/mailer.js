const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

function sendMail(to, subject, body) {

  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: body
  })
    .then(info => console.log('EMAIL SENT', info))
    .catch(err => console.log(err))
}

function sendRegistrationEmail(user) {
  console.log(user)
  return sendMail(user.email, 'Thanks for registering', `Hi ${user.username}, thanks for signing up to the worlds worst Movie database. Have you not heard of IMDB?

  Please click the following link to verify your account:
  http://localhost:4000/confirm/${user.confirmCode}

  Regards,
  WDI MDB Team
  ❤️`)
}

module.exports = {
  sendMail,
  sendRegistrationEmail
}
