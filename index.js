/*!
 * Dependencies
 */

var nodemailer = require('nodemailer')

nodemailer.createTestAccount((err, account) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: account.user, // generated ethereal user
        pass: account.pass  // generated ethereal password
    }
  })

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'cam.b.porter@gmail.com', // sender address
      to: 'cam.b.porter@gmail.com', // list of receivers
      subject: 'Test Email', // Subject line
      text: 'Hi', // plain text body
      html: '<b>Test</b>' // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err)

      console.log('Message sent: %s', info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
})