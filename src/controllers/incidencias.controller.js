const IncidenciaModel = require("../models/incidencia.model");

function addPaginado(pagina, total, respuesta) {
  return (response = {
    TotalElementos: parseInt(total),
    ElementosPagina: parseInt(process.env.ELEMENTOS_POR_PAGINA),
    Pagina: parseInt(pagina),
    Resultado: respuesta,
  });
}
// GET

const getAllIncidencias = async (req, res) => {
  try {
    const [total] = await IncidenciaModel.getNumAllIncidencias();
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [result] = await IncidenciaModel.getAllIncidencias(
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getIncidenciaById = async (req, res) => {
  try {
    const idIncidencia = req.params.idIncidencia;
    const [result] = await IncidenciaModel.getIncidenciaById(idIncidencia);
    console.log(result);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAllIncidenciasByIdEmpleado = async (req, res) => {
  try {
    const [total] = await IncidenciaModel.getNumAllIncidenciasByEmpleado(req.params.usuario_asignado);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [result] = await IncidenciaModel.getAllIncidenciasByEmpleado(
      req.params.usuario_asignado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAllIncidenciasNoVistasByIdEmpleado = async (req, res) => {
  try {
    console.log(req.params)
    const [total] =
      await IncidenciaModel.getNumAllIncidenciasNoVistasByEmpleado(req.params.usuario_asignado,);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [result] = await IncidenciaModel.getAllIncidenciasNoVistasByEmpleado(
      req.params.usuario_asignado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// CREATE
const createIncidencia = async (req, res) => {
  try {
    const [result] = await IncidenciaModel.createIncidencia(req.body);
    const [incidencia] = await IncidenciaModel.getIncidenciaById(
      result.insertId
    );
    res.json(incidencia[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const updateIncidencia = async (req, res) => {
  try {
    const { idIncidencia } = req.params;
    const [result] = await IncidenciaModel.updateIncidencia(
      idIncidencia,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getAllIncidencias,
  getIncidenciaById,
  getAllIncidenciasByIdEmpleado,
  getAllIncidenciasNoVistasByIdEmpleado,
  createIncidencia,
  updateIncidencia,
};
