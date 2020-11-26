module.exports = (sequelize, Sequelize) => {
    const Adresse = sequelize.define("adresse", {
        num_rue: {
            type: Sequelize.STRING
        },
        nom_rue: {
            type: Sequelize.STRING
        },
        code_postal: {
            type: Sequelize.STRING
        },
        ville: {
            type: Sequelize.STRING
        }
    });

    return Adresse;
};