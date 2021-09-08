const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/formule.routes")(app);
require("./app/routes/prestation.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/commande.routes")(app);
require("./app/routes/paiement.routes")(app);
require("./app/routes/moyen_paiement.routes")(app);

// Implémentation mail
const nodemailer = require('nodemailer');
const mailConfig = require("./app/config/mails.config");

var transport = {
  host: "ssl0.ovh.net",
  auth: {
    user: mailConfig.USER,
    pass: mailConfig.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});


app.post('/api/send', (req, res) => {
  const { name, email, message, subject, phone } = req.body
  transporter.sendMail({
    from: email,
    to:"contact@anaisl-conseil.com",
    subject: subject,
    html: `
    Message provenant de : ${name}
    <br/><br/><br/>
    Telephone : ${phone}
    <br/><br/><br/>
    Message : <br/> ${message}
    <br/><br/><br/>
    `
  })
    .then(resp => {
      res.json({ resp })
    })
    .catch(err => {
      console.log(err)
    })
})

// Fin implémentation mail

const path = require('path')

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res, next) => {
  if(req.url === '/api/*') {
    next();
  } if(req.url === '/mail/send') {
    
  }
  else {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }

});


const db = require("./app/models");
const { get } = require("http");

// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync({
  force: false,
  alter: true
}).then(() => {
  console.log("Drop and re-sync db.");
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
