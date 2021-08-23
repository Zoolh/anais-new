module.exports = (sequelize, Sequelize) => {
  const Formule = sequelize.define("formule", {
    libelle: {
      type: Sequelize.STRING
    },
    ordreSortie:{
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    tarif: {
      type: Sequelize.INTEGER
    },
    duree: {
      type: Sequelize.STRING
    },
    sectionAsset: {
      type: Sequelize.STRING
    },
    imagePrincipale: {
      type: Sequelize.STRING
    },
    image2: {
      type: Sequelize.STRING
    }
  });

  return Formule;
};