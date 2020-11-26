module.exports = app => {
    const moyen_paiement = require("../controllers/moyen_paiement.controller");

    var router = require("express").Router();

    router.post("/", moyen_paiement.create);

    router.get("/", moyen_paiement.findAll);

    router.get("/:id", moyen_paiement.findOne);

    router.delete("/:id", moyen_paiement.delete);

    router.put("/:id", moyen_paiement.update);


    app.use('/api/mop', router);
};