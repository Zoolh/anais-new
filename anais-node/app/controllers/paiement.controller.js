const db = require("../models");
const Paiement = db.paiement;
const Commande = db.commande;
const Moyen_Paiement = db.moyen_paiement;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    var paiement = {
        montant: req.body.montant,
        commande_id: req.body.commande_id,
        moyen_paiement_id: req.body.moyen_paiement_id
    };

    Paiement.create(paiement)
        .then(createdPaiement => {
            res.send(createdPaiement);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error during creation of paiement"
            });
        });
};

exports.findAll = (req, res) => {
    Paiement.findAll({
        include: [
            {
                model: Commande,
                as: "commande_paiement"
            },
            {
                model: Moyen_Paiement,
                as: "moyen_paiement"
            }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error in find All for Paiments"
            });
        });



};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Paiement.findByPk(id, {
        include: [
            {
                model: Commande,
                as: "commande_paiement"
            },
            {
                model: Moyen_Paiement,
                as: "moyen_paiement"
            }
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when try to find Paiement with id=" + id
            });
        });


};

exports.delete = (req, res) => {
    const id = req.params.id;

    Paiement.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Paiement was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Paiement delete Client with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Paiement with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Paiement.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Paiement was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Paiement with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Commande with id=" + id
            });
        });
};



