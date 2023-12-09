const router = require("express").Router();
const CorreoController = require('../../controllers/correo.controller');

router.post('/', CorreoController.sendEmail);

module.exports = router;