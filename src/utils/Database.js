const mongoose = require("mongoose");
const customConsole = require("custom-console22");
const console = new customConsole();

mongoose.connect(`mongodb://${process.env.HOST}/${process.env.DATABASE_NAME}`)
    .then(() => console.success(`Connexion à la base de donnée ${process.env.DATABASE_NAME} réussie.`, "DATABASE"))
    .catch(() => console.error("Connexion à la base de donnée refusée.", "DATABASE"));