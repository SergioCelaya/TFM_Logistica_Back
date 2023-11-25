const router = require("express").Router();
const IncidenciasController = require("../../controllers/incidencias.controller");

//GET
// Todas las incidencias getAllIncidencias
router.get("/", IncidenciasController.getAllIncidencias );
//Obtener la incidencia pasándole el id getIncidenciaById
router.get("/:idIncidencia", IncidenciasController.getIncidenciaById);
//Obtener la incidencia por el empleado getIncidenciasByEmpleado
router.get("/usuario/:usuario_asignado", IncidenciasController.getAllIncidenciasByIdEmpleado);
router.get("/noVistas/:usuario_asignado", IncidenciasController.getAllIncidenciasNoVistasByIdEmpleado);







module.exports = router;