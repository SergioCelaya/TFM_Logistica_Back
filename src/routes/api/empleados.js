const router = require("express").Router();
const EmpleadosController = require("../../controllers/empleados.controller");
const {checkEmpleadoId, validateEmpleado} = require("../../middlewares/empleados.middleware")

//GET
router.get("/:pagina",EmpleadosController.getAllEmpleados);
router.get("/byId/:idEmpleado",EmpleadosController.getEmpleadoById);
router.get("/byPuesto/:puesto/:pagina",EmpleadosController.getEmpleadosByPuesto);
router.get("/byPuestoSinPag/:puesto",EmpleadosController.getEmpleadosByPuestoSinPaginar);
router.get("/byPuestoAlmacenSinPag/:puesto/:idalmacen",EmpleadosController.getEmpleadosByPuestoAlmacenSinPaginar);
//POST
router.post("/", validateEmpleado, EmpleadosController.newEmpleado);
//UPDATE
router.put("/:idEmpleado", checkEmpleadoId, EmpleadosController.updateEmpleado);
router.put("/estado/:idEmpleado",checkEmpleadoId, EmpleadosController.updateEstado);
router.put("/almacen/:idEmpleado", checkEmpleadoId, EmpleadosController.updateAlmacen);
module.exports = router;