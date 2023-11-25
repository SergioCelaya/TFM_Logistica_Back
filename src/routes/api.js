const router = require("express").Router();

router.use("/pedidos", require("./api/pedidos"));
router.use("/incidencias", require("./api/incidencias"));
router.use("/empleados", require("./api/empleados"));
router.use("/estados",require("./api/estados"));

module.exports = router;
