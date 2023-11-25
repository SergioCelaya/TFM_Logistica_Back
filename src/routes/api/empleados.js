const router = require("express").Router();
const EmpleadosController = require("../../controllers/empleados.controller");

//GET
router.get("/:pagina",EmpleadosController.getAllEmpleados);
router.get("/byId/:idEmpleado",EmpleadosController.getEmpleadoById);
router.get("/byPuesto/:puesto/:pagina",EmpleadosController.getEmpleadosByPuesto);
//POST
router.post("/",EmpleadosController.newEmpleado);
//UPDATE
router.put("/:idEmpleado",EmpleadosController.updateEmpleado);
router.put("/estado/:idEmpleado",EmpleadosController.updateEstado);
router.put("/almacen/:idEmpleado",EmpleadosController.updateAlmacen);
module.exports = router;