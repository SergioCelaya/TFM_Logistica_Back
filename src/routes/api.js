const router = require("express").Router();

router.use("/pedidos", require("./api/pedidos"));
router.use("/incidencias", require("./api/incidencias"));
router.use("/empleados", require("./api/empleados"));

module.exports = router;
