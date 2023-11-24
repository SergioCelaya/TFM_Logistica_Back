const router = require("express").Router();
const IncidenciasController = require("../../controllers/incidencias.controller");

//GET
// Todas las incidencias getAllIncidencias
router.get("/", IncidenciasController.getAllIncidencias )
//Obtener la incidencia pasándole el id getIncidenciaById
router.get("/:id", )
//Obtener la incidencia por el empleado getIncidenciasByEmpleado
router.get("/:idpeticion_asociada", )






module.exports = router;