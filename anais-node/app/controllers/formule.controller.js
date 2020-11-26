const db = require("../models");
const Prestation = db.prestation;
const Formule = db.formule;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.libelle) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Formule
    const formule = {
        libelle: req.body.libelle,
        description: req.body.description,
        tarif: req.body.tarif,
        duree: req.body.duree
    };

    // Save Tutorial in the database
    Formule.create(formule)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });

};


exports.findAll = (req, res) => {
    Formule.findAll({
        include: [
            {
                model: Prestation,
                as: "prestation",
                through: { attributes: [] },
            }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Formule."
            });
        });



};

// Find one By Id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Formule.findByPk(id, {
        include: [
            {
                model: Prestation,
                as: "prestation",
                through: { attributes: [] },
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Formule with id=" + id
            });
        });


};

// Add a Prestation to a Formule
exports.addPrestation = (req, res) => {
    const formule_id = req.body.formule_id;
    const prestation_id = req.body.prestation_id;

    return Formule.findByPk(formule_id)
        .then((formule) => {
            if (!formule) {
                console.log("formule not found!");
                return null;
            }
            return Prestation.findByPk(prestation_id).then((prestation) => {
                if (!prestation) {
                    console.log("prestation not found!");
                    return null;
                }

                formule.addPrestation(prestation);
                res.send(prestation);
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Erreur dans ajout de presta"
            });
        });
};

exports.removePrestation = (req, res) => {
    const idFormule = req.params.id;

    return Formule.findByPk(idFormule)
        .then((formule) => {
            if (!formule) {
                console.log(`formule not found for delete for id=${idFormule} !`);
                return null;
            }
            return Prestation.findAll()
                .then((prestations) => {
                    if (!prestations) {
                        console.log(`prestation not found for delete for id=${idFormule} !`);
                        return null;
                    }
                    prestations.forEach(prestation => {
                        formule.removePrestation(prestation);
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



exports.delete = (req, res) => {
    const id = req.params.id;

    Formule.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Formule was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Formule with id=${id}. Maybe Formule was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Formule with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Formule.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Formule was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Formule with id=${id}. Maybe Formule was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Formule with id=" + id
            });
        });
};


// TODO : implements below


// exports.deleteAll = (req, res) => {

// };


// exports.findAllPublished = (req, res) => {

// };
