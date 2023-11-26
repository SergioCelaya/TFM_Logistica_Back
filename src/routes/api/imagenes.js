const router = require("express").Router();
const ImagenesController = require("../../controllers/imagenes.controller");

const multer = require("multer");

const upload = multer({ dest: "./Imagenes/" });

router.post("/upload/:idEmpleado", upload.single("imagen"), ImagenesController.saveImagenEmpleado);

module.exports = router;
