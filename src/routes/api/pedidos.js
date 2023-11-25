const router = require("express").Router();
const PedidosController = require("../../controllers/pedidos.controller");


//GET
router.get("/:pagina",PedidosController.getAllPedidos );
router.get("/byId/:idPedido",PedidosController.getPedidoById);
router.get("/byResponsableId/:usuario_responsable/:pagina",PedidosController.getAllPedidosByIdResponsable);
router.get("/byEmpleadoId/:usuario_asignado/:pagina",PedidosController.getAllPedidosByIdEmpleado);
router.get("/byEmpleadoEstado/:usuario_asignado/:estado/:pagina",PedidosController.getPedidosByIdEmpleadoEstado);
router.get("/byResponsableEstado/:usuario_responsable/:estado/:pagina",PedidosController.getPedidosByIdResponsableEstado);
router.get("/byAlmacenOrigen/:almacen_origen/:pagina",PedidosController.getPedidosByAlmacenOrigen);
router.get("/byAlmacenDestino/:almacen_destino/:pagina",PedidosController.getPedidosByAlmacenDestino);
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