module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    });

    return Client;
};