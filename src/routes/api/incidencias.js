const router = require("express").Router();
const IncidenciasController = require("../../controllers/incidencias.controller");

// GET

router.get("/", IncidenciasController.getAllIncidencias );

router.get("/:idIncidencia", IncidenciasController.getIncidenciaById);

router.get("/usuario/:usuario_asignado", IncidenciasController.getAllIncidenciasByIdEmpleado);

router.get("/noVistas/:usuario_asignado", IncidenciasController.getAllIncidenciasNoVistasByIdEmpleado);

// POST

router.post("/", IncidenciasController.createIncidencia);




module.exports = router;