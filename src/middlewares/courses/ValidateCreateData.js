const express = require("express");

/**
 * Valider les données correspondant à la création d'un cours.
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
module.exports = (req, res, next) => {
    let [title, content, picture, categories, author] = req.body;
    if (!title || !content || !author || !categories) return;
};