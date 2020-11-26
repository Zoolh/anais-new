module.exports = (sequelize, Sequelize) => {
    const Paiement = sequelize.define("paiement", {
        montant: {
            type: Sequelize.INTEGER
        },
        date_paiement: {
            type: Sequelize.DATE
        }
    });

    return Paiement;
};