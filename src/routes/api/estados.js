const router = require("express").Router();
const EstadosController = require("../../controllers/estados.controller");

// GET

router.get("/:idPedido",EstadosController.getEstadosPedido  );


module.exports = router;