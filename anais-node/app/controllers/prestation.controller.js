const db = require("../models");
const Prestation = db.prestation;
const Formule = db.formule;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.libelle) {
        res.status(400).send({
            message: "Il manque un titre"
        });
        return;
    }

    // Create a Prestation
    const prestation = {
        libelle: req.body.libelle,
        description: req.body.description,
        tarif: req.body.tarif,
        duree: req.body.duree

    };

    // Save Prestation in the database
    Prestation.create(prestation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Prestation."
            });
        });

};


exports.findAll = (req, res) => {
    Prestation.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Prestation."
            });
        });

};

// Find one By Id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Prestation.findByPk(id, {
        include: [

            {
                model: Formule,
                as: "formule",
                through: { attributes: [] },
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Prestation with id=" + id
            });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Prestation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Prestation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Prestation with id=${id}. Maybe Prestation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Prestation with id=" + id
        });
      });

};

exports.update = (req, res) => {
    const id = req.params.id;

    Prestation.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Prestation was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Prestation with id=${id}. Maybe Prestation was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Prestation with id=" + id
        });
      });
};

// TODO : implements below





// exports.deleteAll = (req, res) => {

// };


// exports.findAllPublished = (req, res) => {

// };
