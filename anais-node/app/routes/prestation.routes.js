module.exports = app => {
  const prestations = require("../controllers/prestation.controller");

  var router = require("express").Router();

  // Create a new Prestation
  router.post("/", prestations.create);

  // Retrieve all Prestations
  router.get("/", prestations.findAll);

  // Retrieve a single Prestation with id
  router.get("/:id", prestations.findOne);

  // Delete prestation with an id
  router.delete("/:id", prestations.delete);

  // Update a Prestation with id
  router.put("/:id", prestations.update);

  app.use('/api/prestations', router);
};