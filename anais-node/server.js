const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

require('dotenv').config()

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync({
  force: false,
  alter: true
}).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Anaïs" });
});


require("./app/routes/formule.routes")(app);
require("./app/routes/prestation.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/commande.routes")(app);
require("./app/routes/paiement.routes")(app);
require("./app/routes/moyen_paiement.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
