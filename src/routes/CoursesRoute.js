const express = require("express");
const router = express.Router();
const CoursesController = require("../controllers/CoursesController");

router.get("/", CoursesController.getCourses); // Récupérer tous les cours
router.get("/:id", CoursesController.getCourse); // Récupérer un cours avec un ID particulier
router.post("/", CoursesController.createCourse); // Créer un nouveau cours
router.delete("/delete/:id", CoursesController.deleteCourse); // Supprimer un cours particulier
router.put("/:id", CoursesController.editCourse); // Modifier un cours

module.exports = router;