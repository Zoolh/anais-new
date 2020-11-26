module.exports = app => {
    const commande = require("../controllers/commande.controller");

    var router = require("express").Router();

    // Create a new commande
    router.post("/", commande.create);

    // Retrieve all commande
    router.get("/", commande.findAll);

    // Retrieve a single commande with id
    router.get("/:id", commande.findOne);

    // Retrieve all commande for a client
    router.get("/:id", commande.findByClientId);

    // Add a prestation to a commande
    router.post("/add-presta", commande.addPrestation);

    // remove a prestation to a commande
    router.delete("/remove-presta/:id", commande.removePrestation);

    // Delete commande with an id
    router.delete("/:id", commande.delete);

    // Update a commande with id
    router.put("/:id", commande.update);


    app.use('/api/commandes', router);
};