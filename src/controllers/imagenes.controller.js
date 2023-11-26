const EmpleadosModel = require("../models/empleado.model");
const AlmacenModel = require("../models/almacen.model");

const saveImagenEmpleado = async(req, res) => {
    try {
        EmpleadosModel.updateNombreImagenEmpleado(req.params.idEmpleado,req.file.filename)
        res.json({"Resultado":"Guardado"})
      } catch (error) {
        res.json({ fatal: error.message });
      }
  }

  const saveImagenAlmacen = async(req, res) => {
    try {
      AlmacenModel.updateNombreImagenAlmacen(req.params.idAlmacen,req.file.filename)
        res.json({"Resultado":"Guardado"})
      } catch (error) {
        res.json({ fatal: error.message });
      }
  }

  module.exports = {
    saveImagenEmpleado,
    saveImagenAlmacen
  }