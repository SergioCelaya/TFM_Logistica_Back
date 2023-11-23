const router = require("express").Router();

router.use("/pedidos", require("./api/pedidos"));


module.exports = router;
