module.exports = (sequelize, Sequelize) => {
    const Commande = sequelize.define("commande", {
      is_payed: {
        type: Sequelize.BOOLEAN
      },
      date_realisation: {
        type: Sequelize.DATE
      }
    });
  
    return Commande;
  };