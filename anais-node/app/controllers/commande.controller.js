const db = require("../models");
const Commande = db.commande;
const Prestation = db.prestation;
const Formule = db.formule;
const Paiement = db.paiement;
const Client = db.client;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    var commande = {
        is_payed: req.body.is_payed,
        date_realisation: req.body.date_realisation,
        client_id: req.body.client_id,
        formule_id: req.body.formule_id
    };

    Commande.create(commande)
        .then(createdCommande => {
            res.send(createdCommande);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error during creation of client"
            });
        });
};

exports.addPrestation = (req, res) => {
    const commande_id = req.body.commande_id;
    const prestation_id = req.body.prestation_id;

    return Commande.findByPk(commande_id)
        .then((commande) => {
            if (!commande) {
                console.log("commande not found!");
                return null;
            }
            return Prestation.findByPk(prestation_id).then((prestation) => {
                if (!prestation) {
                    console.log("prestation not found!");
                    return null;
                }

                commande.addPrestation(prestation);
                res.send(prestation);
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.removePrestation = (req, res) => {
    const idCommande = req.params.id;

    return Commande.findByPk(idCommande)
        .then((commande) => {
            if (!commande) {
                console.log(`commande not found for delete for id=${idCommande} !`);
                return null;
            }
            return Prestation.findAll()
                .then((prestations) => {
                    if (!prestations) {
                        console.log(`prestation not found for delete for id=${idCommande} !`);
                        return null;
                    }
                    prestations.forEach(prestation => {
                        commande.removePrestation(prestation);
                    });
                    res.send(formule);
                });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error while removing prestation"
            });
        });
};

exports.findAll = (req, res) => {
    Commande.findAll({
        include: [
            {
                model: Formule,
                as: "formule_commande"
            },
            {
                model: Client,
                as: "client_commande"
            },
            {
                model: Paiement,
                as: "commande_paiement"
            }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error in find All for clients"
            });
        });



};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Commande.findByPk(id, {
        include: [
            {
                model: Formule,
                as: "formule_commande"
            },
            {
                model: Client,
                as: "client_commande"
            },
            {
                model: Paiement,
                as: "commande_paiement"
            }
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when try to find Commande with id=" + id
            });
        });
};


exports.findByClientId = (req, res) => {
    const id_client = req.params.id_client;
    Commande.findAll({
        include: [
            {
                model: Formule,
                as: "formule_commande"
            },
            {
                model: Client,
                as: "client_commande",
                where: {id: id_client}
            },
            {
                model: Paiement,
                as: "commande_paiement"
            }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when try to find Commande for client id=" + id
            });
        });
};



exports.delete = (req, res) => {
    const id = req.params.id;

    Commande.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Commande was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Commande delete Client with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Commande with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Commande.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Commande was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Commande with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Commande with id=" + id
            });
        });
};



