module.exports = app => {
  const formules = require("../controllers/formule.controller");

  var router = require("express").Router();

  // Create a new Formule
  router.post("/", formules.create);

  // Retrieve all Formules
  router.get("/", formules.findAll);

  // Retrieve a single Formule with id
  router.get("/:id", formules.findOne);

  // Add a prestation to a formule
  router.post("/add-presta", formules.addPrestation);

  // remove a prestation to a formule
  router.delete("/remove-presta/:id", formules.removePrestation);

  // Delete Formule with an id
  router.delete("/:id", formules.delete);

  // Update a Formule with id
  router.put("/:id", formules.update);


  app.use('/api/formules', router);
};