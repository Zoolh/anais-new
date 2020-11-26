module.exports = (sequelize, Sequelize) => {
    const Moyen_Paiement = sequelize.define("moyen_paiement", {
        libelle: {
            type: Sequelize.STRING
        }
    });

    return Moyen_Paiement;
};