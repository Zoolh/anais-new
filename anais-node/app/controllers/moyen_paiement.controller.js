const db = require("../models");
const Moyen_Paiement = db.moyen_paiement;
const Paiement = db.paiement;
const Commande = db.commande;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    var moyen_paiement = {
        libelle: req.body.libelle
    };

    Moyen_Paiement.create(moyen_paiement)
        .then(createdMoyenPaiement => {
            res.send(createdMoyenPaiement);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error during creation"
            });
        });
};

exports.findAll = (req, res) => {
    Moyen_Paiement.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error in find All"
            });
        });



};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Moyen_Paiement.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when try to find data with id=" + id
            });
        });


};

exports.delete = (req, res) => {
    const id = req.params.id;

    Moyen_Paiement.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Moyen_Paiement was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Moyen_Paiement delete Client with id=${id}`
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

    Moyen_Paiement.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Moyen_Paiement was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Moyen_Paiement with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Commande with id=" + id
            });
        });
};



