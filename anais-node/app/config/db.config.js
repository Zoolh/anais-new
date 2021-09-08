// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "anais_project",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };



// Test bascule sur bdd PG
module.exports = {
  HOST: "ec2-54-73-58-75.eu-west-1.compute.amazonaws.com",
  USER: "ezuolvztzwpnjr",
  PASSWORD: "313745618ef7bc71db54b67c8925fdacee4b105dca8b8cfeaf5eda1369e2be9a",
  DB: "dte2hrd627c1n",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};