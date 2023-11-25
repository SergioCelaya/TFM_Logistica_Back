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

  const getIncidenciaById = async (req, res) => {
    try {
      const idIncidencia = req.params.idIncidencia;
      const [result] = await IncidenciaModel.getIncidenciaById(idIncidencia);
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  const getIncidenciaByEmpleado = async (req, res) => {
    try {
      const usuario_asignado = req.params.usuario_asignado;
      const [result] = await IncidenciaModel.getIncidenciaByEmpleado(usuario_asignado);
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };


module.exports = {
    getAllIncidencias,
    getIncidenciaById,
    getIncidenciaByEmpleado
}