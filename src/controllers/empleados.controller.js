const EmpleadosModel = require("../models/empleado.model");
const { addPaginado } = require("../helpers/utils");

// GET

const getAllEmpleados = async (req, res) => {
  try {
    const [total] = await EmpleadosModel.getNumAllEmpleados();
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [result] = await EmpleadosModel.getAllEmpleados(
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getEmpleadoById = async (req, res) => {
  try {
    const [result] = await EmpleadosModel.getEmpleadoById(
      req.params.idEmpleado
    );
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getEmpleadosByPuesto = async (req, res) => {
  try {
    const [total] = await EmpleadosModel.getNumEmpleadosByPuesto(
      req.params.puesto
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [result] = await EmpleadosModel.getEmpleadosByPuesto(
      req.params.puesto,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};
const getEmpleadosByPuestoSinPaginar = async (req, res) => {
  try {
    const [result] = await EmpleadosModel.getEmpleadosByPuestoSinPaginar(
      req.params.puesto
    );
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};
const newEmpleado = async (req, res) => {
  try {
    const [empleado] = await EmpleadosModel.createEmpleado(req.body);
    const [result] = await EmpleadosModel.getEmpleadoById(empleado.insertId);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const updateEmpleado = async (req, res) => {
  try {
    const { idEmpleado } = req.params;
    const [result] = await EmpleadosModel.updateEmpleado(idEmpleado, req.body);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const updateEstado = async (req, res) => {
  try {
    const { idEmpleado } = req.params;
    const [result] = await EmpleadosModel.updateEstadoEmpleado(
      idEmpleado,
      req.body
    );
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const updateAlmacen = async (req, res) => {
  try {
    const { idEmpleado } = req.params;
    const [result] = await EmpleadosModel.updateAlmacenEmpleado(
      idEmpleado,
      req.body
    );
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getAllEmpleados,
  getEmpleadoById,
  getEmpleadosByPuesto,
  getEmpleadosByPuestoSinPaginar,
  newEmpleado,
  updateEmpleado,
  updateEstado,
  updateAlmacen,
};
