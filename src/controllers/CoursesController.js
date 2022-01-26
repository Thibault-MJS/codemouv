const express = require("express");
const Course = require("../models/CourseModel");

class CoursesController {

    /**
     * Récupérer les cours dans la base de donnée.
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    static async getCourses(req, res) {
        const data = await Course.find();
        res.status(200).send({ data });
    }

    /**
     * Récupérer un cours dans la base de donnée.
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    static getCourse(req, res, next) {
        
    }

    /**
     * Sauvegarder un cours dans la base de donnée.
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    static createCourse(req, res, next) {
        
    }

    /**
     * Supprimer un cours dans la base de donnée.
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    static deleteCourse(req, res, next) {
        
    }

    /**
     * Modifier un cours dans la base de donnée.
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    static editCourse(req, res, next) {
        
    }
}

module.exports = CoursesController;