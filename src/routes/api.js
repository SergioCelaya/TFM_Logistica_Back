const router = require("express").Router();

router.use("/pedidos", require("./api/pedidos"));
router.use("/incidencias", require("./api/incidencias"));
console.log("Hola");

module.exports = router;

//comentario
