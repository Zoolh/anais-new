module.exports = (sequelize, Sequelize) => {
  const Formule = sequelize.define("formule", {
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
    }
  });

  return Formule;
};