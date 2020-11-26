const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    freezeTableName: true,
    updatedAt: false,
    createdAt: false
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Below define relationships between models
// BelongToMany is a simple way to define the many-to-many

db.prestation = require("./prestation.model")(sequelize, Sequelize);
db.formule = require("./formule.model")(sequelize, Sequelize);
db.client = require("./client.model")(sequelize, Sequelize);
db.commande = require("./commande.model")(sequelize, Sequelize);
db.moyen_paiement = require("./moyen_paiement.model")(sequelize, Sequelize);
db.paiement = require("./paiement.model")(sequelize, Sequelize);
db.adresse = require("./adresse.model")(sequelize, Sequelize);

db.prestation.belongsToMany(db.formule, {
  through: "formule_prestation",
  as: "formule",
  foreignKey: "prestation_id",
});
db.formule.belongsToMany(db.prestation, {
  through: "formule_prestation",
  as: "prestation",
  foreignKey: "formule_id",
});


db.formule.hasMany(db.commande, {
  as: "formule_commande",
  foreignKey: {
    name: "formule_id"
  }
})
db.commande.belongsTo(db.formule, {
  as: "formule_commande",
  foreignKey: {
    name: "formule_id"
  }
})

db.prestation.belongsToMany(db.commande, {
  through: "commande_prestation",
  as:"commande",
  foreignKey: "prestation_id"
})
db.commande.belongsToMany(db.prestation, {
  through: "commande_prestation",
  as: "prestation",
  foreignKey: "commande_id"
})


db.client.hasMany(db.commande, {
  as: "client_commande",
  foreignKey: {
    name: "client_id",
    allowNull: false
  }
})
db.commande.belongsTo(db.client, {
  as: "client_commande",
  foreignKey: {
    name: "client_id",
    allowNull: false
  }
})



db.commande.hasMany(db.paiement, {
  as: "commande_paiement",
  foreignKey: "commande_id"
})
db.paiement.belongsTo(db.commande, {
  as: "commande_paiement",
  foreignKey: "commande_id"
})


db.moyen_paiement.hasMany(db.paiement, {
  as: "moyen_paiement",
  foreignKey: "moyen_paiement_id"
})
db.paiement.belongsTo(db.moyen_paiement, {
  as: "moyen_paiement",
  foreignKey: "moyen_paiement_id"
})



db.client.hasOne((db.adresse), {
  as: "client_adresse",
  foreignKey: "client_id"
})


module.exports = db;
