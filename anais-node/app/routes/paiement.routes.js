module.exports = app => {
    const paiement = require("../controllers/paiement.controller");

    var router = require("express").Router();

    router.post("/", paiement.create);

    router.get("/", paiement.findAll);

    router.get("/:id", paiement.findOne);

    router.delete("/:id", paiement.delete);

    router.put("/:id", paiement.update);


    app.use('/api/paiements', router);
};