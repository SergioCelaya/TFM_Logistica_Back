const IncidenciaModel = require("../models/incidencia.model");

//GET
const getAllIncidencias = async (req, res) => {
    try {
      const [result] = await IncidenciaModel.getAllIncidencias();
      res.json(result[0]);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };


module.exports = {
    getAllIncidencias
}