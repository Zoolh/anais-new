module.exports = (sequelize, Sequelize) => {
    const Prestation = sequelize.define("prestation", {
      libelle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      tarif: {
        type: Sequelize.INTEGER
      },
      duree: {
          type: Sequelize.INTEGER
      },
      ordreSortie: {
        type: Sequelize.INTEGER
      }
    });
  
    return Prestation;
  };