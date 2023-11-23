const pedidosModel = require("../models/pedido.model");

//GET
const getAllPedidos = async (req, res) => {
  try {
    const result = await pedidosModel.getAllPedidos();
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAllPedidosByIdEmpleado = async (req, res) => {
  try {
    const result = await pedidosModel.getPedidoByIdEmpleado(
      req.params.usuario_asignado
    );
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidoById = async (req, res) => {
  try {
    const result = await pedidosModel.getPedidoById(req.params.idPedido);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByIdEmpleadoEstado = async (req, res) => {
  try {
    const result = await pedidosModel.getPedidosByIdEmpleadoEstado(
      req.params.usuario_asignado,
      req.params.estado
    );
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

//CREATE
const createPedido = async (req, res) => {
  try {
    const [result] = await pedidosModel.createPedido(req.body);
    const [pedido] = await pedidosModel.getPedidoById(result.idPedido);
    res.json(pedido[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

//UPDATE
const updatePedido = async (req, res) => {
  try {
    const { idPedido } = req.params;
    const [result] = await pedidosModel.updatePedido(idPedido, req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toPendienteValidar = async (req, res) => {
  try {
    const [result] = await pedidosModel.toPendienteValidar(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toRectificar = async (req, res) => {
  try {
    const [result] = await pedidosModel.toRectificar(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toValidado = async (req, res) => {
  try {
    const [result] = await pedidosModel.toValidado(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toEnTransito = async (req, res) => {
  try {
    const [result] = await pedidosModel.toEnTransito(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toPendienteRecepcionar = async (req, res) => {
  try {
    const [result] = await pedidosModel.toPendienteRecepcionar(
      req.params.idPedido
    );
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toFinalizado = async (req, res) => {
  try {
    const [result] = await pedidosModel.toFinalizado(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  getAllPedidosByIdEmpleado,
  getPedidosByIdEmpleadoEstado,
  createPedido,
  updatePedido,
  toPendienteValidar,
  toRectificar,
  toValidado,
  toEnTransito,
  toPendienteRecepcionar,
  toFinalizado,
};
