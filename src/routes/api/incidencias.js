const router = require("express").Router();
const IncidenciasController = require("../../controllers/incidencias.controller");
const {checkIncidenciaId, validateIncidencia} = require('../../middlewares/incidencias.middleware');

// GET

router.get("/:pagina", IncidenciasController.getAllIncidencias );

router.get("/byAlmacen/:idAlmacen/:pagina",IncidenciasController.getAllIncidenciasAlmacen);

router.get("/byId/:idIncidencia", checkIncidenciaId, IncidenciasController.getIncidenciaById);

router.get("/byIdPedido/:idpedido",  IncidenciasController.getIncidenciaByIdPedido);

router.get("/byNumPedido/:numPedido",  IncidenciasController.getIncidenciaByNumPedido);

router.get("/usuario/:usuario_asignado/:pagina", IncidenciasController.getAllIncidenciasByIdEmpleado);

router.get("/noVistas/:usuario_asignado/:pagina", IncidenciasController.getAllIncidenciasNoVistasByIdEmpleado);

// POST

router.post("/", IncidenciasController.createIncidencia);

//router.post("/create", IncidenciasController.createIncidencia);

// UPDATE
router.put("/:idIncidencia", checkIncidenciaId, validateIncidencia, IncidenciasController.updateIncidencia);

router.put("/vista/:idIncidencia", checkIncidenciaId,  IncidenciasController.updateIncidenciaToVista);

router.put("/noVista/:idIncidencia",checkIncidenciaId, IncidenciasController.updateIncidenciaToNoVista);







module.exports = router;