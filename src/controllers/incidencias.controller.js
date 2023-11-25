const IncidenciaModel = require("../models/incidencia.model");

// GET

const getAllIncidencias = async (req, res) => {
    try {
      const [result] = await IncidenciaModel.getAllIncidencias();
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  const getIncidenciaById = async (req, res) => {
    try {
      const idIncidencia = req.params.idIncidencia;
      const [result] = await IncidenciaModel.getIncidenciaById(idIncidencia);
      res.json(result[0]);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  const getAllIncidenciasByIdEmpleado = async (req, res) => {
    try {
      const [result] = await IncidenciaModel.getAllIncidenciasByEmpleado(
        req.params.usuario_asignado
      );
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  const getAllIncidenciasNoVistasByIdEmpleado = async (req, res) => {
    try {
      const [result] = await IncidenciaModel.getAllIncidenciasNoVistasByEmpleado(
        req.params.usuario_asignado
      );
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

// CREATE
const createIncidencia = async (req, res) => {
    try {
      console.log(req.body)
      const [result] = await IncidenciaModel.createIncidencia(req.body);
      const [incidencia] = await IncidenciaModel.getIncidenciaById(result.insertId)
      res.json(incidencia[0]);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };
  
module.exports = {
    getAllIncidencias,
    getIncidenciaById,
    getAllIncidenciasByIdEmpleado,
    getAllIncidenciasNoVistasByIdEmpleado,
    createIncidencia
}