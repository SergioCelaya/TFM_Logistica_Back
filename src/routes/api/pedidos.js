const router = require("express").Router();
const PedidosController = require("../../controllers/pedidos.controller");


//GET
router.get("/",PedidosController.getAllPedidos );
router.get("/:idPedido",PedidosController.getPedidoById);
router.get("/byEmpleadoId/:usuario_asignado",PedidosController.getAllPedidosByIdEmpleado);
router.get("/byEmpleadoEstado/:usuario_asignado/:estado",PedidosController.getPedidosByIdEmpleadoEstado);
//CREATE
router.post("/",PedidosController.createPedido);
//UPDATE
router.put("/:idPedido",PedidosController.updatePedido);
router.put("/toPendienteValidar/:idPedido",PedidosController.toPendienteValidar);
router.put("/toRectificar/:idPedido",PedidosController.toRectificar);
router.put("/toValidado/:idPedido",PedidosController.toValidado);
router.put("/toEnTransito/:idPedido",PedidosController.toEnTransito);
router.put("/toPendienteRecepcionar/:idPedido",PedidosController.toPendienteRecepcionar);
router.put("/toFinalizado/:idPedido",PedidosController.toFinalizado);

module.exports = router;