const router = require("express").Router();
const express = require("express");
const ImagenesController = require("../../controllers/imagenes.controller");
var path = require('path');
const multer = require("multer");
const { fileURLToPath } = require("url");
const MIMETYPES = ["image/jpg","image/jpeg", "image/png"];

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join("./imagenes"),
    filename: (req, file, cb) => {
        console.log("Entra por aqui")
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

router.post(
  "/upload/:idEmpleado",
  upload.single("imagen"),
  ImagenesController.saveImagenEmpleado
);

router.use("/getImagenEmpleado",express.static("./imagenes"))

module.exports = router;
