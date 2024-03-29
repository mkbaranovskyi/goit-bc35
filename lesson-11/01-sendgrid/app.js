require('dotenv').config()
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, MAIL_SENDER_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

sgMail
  .send({
    from: MAIL_SENDER_EMAIL,
    to: 'kostortitus@gmail.com',
    subject: 'Verify your email',
    html: `<a href="http://example.com">Click new</a>,`
  })
  .then((res) => console.log('The email is sent'))
  .catch((err) => console.error(JSON.stringify(err, null, 2)))
