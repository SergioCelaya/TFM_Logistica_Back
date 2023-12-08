const router = require("express").Router();
const PedidosController = require("../../controllers/pedidos.controller");
const {checkPedidoId, validatePedido} = require("../../middlewares/pedidos.middleware");


//GET
router.get("/:pagina",PedidosController.getAllPedidos);
router.get("/estado/:estado/:pagina",PedidosController.getAllPedidosByEstado);
router.get("/byId/:idPedido",PedidosController.getPedidoById);
router.get("/byNumPedido/:numPedido",PedidosController.getPedidoByNumPedido);
router.get("/byResponsableId/:usuario_responsable/:pagina",PedidosController.getAllPedidosByIdResponsable);
router.get("/byEmpleadoId/:usuario_asignado/:pagina",PedidosController.getAllPedidosByIdEmpleado);
router.get("/byEmpleadoEstado/:usuario_asignado/:estado/:pagina",PedidosController.getPedidosByIdEmpleadoEstado);
router.get("/byResponsableEstado/:usuario_responsable/:estado/:pagina",PedidosController.getPedidosByIdResponsableEstado);
router.get("/byAlmacenOrigen/:almacen_origen/:pagina",PedidosController.getPedidosByAlmacenOrigen);
router.get("/byAlmacenDestino/:almacen_destino/:pagina",PedidosController.getPedidosByAlmacenDestino);
router.get("/deEncargadoByAlmacen/:idalmacen/:idempleado/:pagina",PedidosController.getPedidosDeEncargado);
router.get("/deEncargadoValidar/:idalmacen/:idempleado/:pagina",PedidosController.getPedidosEncargadosValidar);
router.get("/deEncargadoRecepcionar/:idalmacen/:pagina",PedidosController.getPedidosEncargadosRecepcionar);
//CREATE
router.post("/",validatePedido, PedidosController.createPedido);
//UPDATE
router.put("/:idPedido",checkPedidoId,PedidosController.updatePedido);
router.put("/toPendienteValidar/:idPedido", checkPedidoId, PedidosController.toPendienteValidar);
router.put("/toRectificar/:idPedido",checkPedidoId, PedidosController.toRectificar);
router.put("/toValidado/:idPedido",checkPedidoId, PedidosController.toValidado);
router.put("/toEnTransito/:idPedido",checkPedidoId, PedidosController.toEnTransito);
router.put("/toPendienteRecepcionar/:idPedido", checkPedidoId, PedidosController.toPendienteRecepcionar);
router.put("/toFinalizado/:idPedido",checkPedidoId, PedidosController.toFinalizado);

module.exports = router;