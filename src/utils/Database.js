const { Sequelize } = require("sequelize");
const customConsole = require("custom-console22");
const console = new customConsole();

const db = new Sequelize(process.env.DATABASE_NAME, process.env.USERNAME, process.env.PASSWORD, {
    dialect: "mysql",
    host: process.env.HOST
}).authenticate()
    .then(() => console.success("Connexion à la base de donnée réussie.", "DATABASE"))
    .catch(() => console.error("Connexion à la base de donnée refusée.", "DATABASE"));

module.exports = db;