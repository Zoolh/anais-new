const db = require("../models");
const Client = db.client;
const Adresse = db.adresse;
const Commande = db.commande;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {


    var client = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        email: req.body.email,
        notes: req.body.notes
    };

    Client.create(client)
        .then(createdClient => {
            client = createdClient;
            var adresse = {
                num_rue: req.body.num_rue,
                nom_rue: req.body.nom_rue,
                code_postal: req.body.code_postal,
                ville: req.body.ville,
                client_id: client.id
            }
            return Adresse.create(adresse)
                .then(createdAdresse => {

                    res.send(createdAdresse);
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error during creation of client"
            });
        });
};

exports.findAll = (req, res) => {
    Client.findAll({
        include: [
            {
                model: Adresse,
                as: "client_adresse"
            },
            {
                model: Commande,
                as: "client_commande"
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
    Client.findByPk(id, {
        include: [
            {
                model: Adresse,
                as: "client_adresse"
            },
            {
                model: Commande,
                as: "client_commande"
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when try to find client with id=" + id
            });
        });


};

exports.delete = (req, res) => {
    const id = req.params.id;

    Client.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Client with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Client with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Client.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            var adresse = {
                num_rue: req.body.num_rue,
                nom_rue: req.body.nom_rue,
                code_postal: req.body.code_postal,
                ville: req.body.ville
            }
            Adresse.update(adresse, {
                where: { client_id: id }
            })
            if (num == 1) {
                res.send({
                    message: "Client was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Client with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Client with id=" + id
            });
        });
};



