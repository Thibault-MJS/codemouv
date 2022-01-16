const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Importation des différentes routes

const CoursesRoute = require("./src/routes/CoursesRoute");

// Application des middleware de bodyParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Application des différentes routes pour l'API

app.use("/api/courses", CoursesRoute);