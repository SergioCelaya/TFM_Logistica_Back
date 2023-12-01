const router = require("express").Router();
const express = require("express");
const ImagenesController = require("../../controllers/imagenes.controller");
var path = require("path");
const multer = require("multer");
const { fileURLToPath } = require("url");
const MIMETYPES = ["image/jpg", "image/jpeg", "image/png"];
const rutaAlmacen = "./imagenes/almacenes";
const rutaUsuario = "./imagenes/empleados";

function uploadImagen(ruta) {
  return multer({
    storage: multer.diskStorage({
      destination: path.join(ruta),
      filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const filename = file.originalname.split(fileExtension)[0];
        cb(null, `${filename}-${Date.now()}${fileExtension}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (MIMETYPES.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(Error("El archivo no tiene la extensión permitida"));
      }
    },
    limits: {
      fieldSize: 100000000,
    },
  });
}

const uploadUsuario = uploadImagen(rutaUsuario);

const uploadAlmacen = uploadImagen(rutaAlmacen);

router.post(
  "/uploadImagenEmpleado/:idEmpleado",
  uploadUsuario.single("imagen"),
  ImagenesController.saveImagenEmpleado
);
router.post(
  "/uploadImagenAlmacen/:idAlmacen",
  uploadAlmacen.single("imagen"),
  ImagenesController.saveImagenAlmacen
);

router.use("/getImagenEmpleado", express.static(rutaUsuario));
router.use("/getImagenAlmacen", express.static(rutaAlmacen));
module.exports = router;
