const EmpleadosModel = require("../models/empleado.model");

const saveImagenEmpleado = async(req, res) => {
    try {
        EmpleadosModel.updateNombreImagenEmpleado(req.params.idEmpleado,req.file.filename)
        res.json({"Resultado":"Guardado"})
      } catch (error) {
        res.json({ fatal: error.message });
      }
  }

  module.exports = {
    saveImagenEmpleado
  }