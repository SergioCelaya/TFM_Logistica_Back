const router = require("express").Router();

router.use("/pedidos", require("./api/pedidos"));
router.use("/incidencias", require("./api/incidencias"));


module.exports = router;

