const router = require("express").Router();
const IncidenciasController = require("../../controllers/incidencias.controller");

// GET

router.get("/:pagina", IncidenciasController.getAllIncidencias );

router.get("/byId/:idIncidencia", IncidenciasController.getIncidenciaById);

router.get("/usuario/:usuario_asignado/:pagina", IncidenciasController.getAllIncidenciasByIdEmpleado);

router.get("/noVistas/:usuario_asignado/:pagina", IncidenciasController.getAllIncidenciasNoVistasByIdEmpleado);

// POST

router.post("/", IncidenciasController.createIncidencia);

// UPDATE
router.put("/:idIncidencia", IncidenciasController.updateIncidencia);

router.put("/vista/:idIncidencia", IncidenciasController.updateIncidenciaToVista);







module.exports = router;