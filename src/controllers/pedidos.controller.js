const PedidosModel = require("../models/pedido.model");

//GET
const getAllPedidos = async (req, res) => {
  try {
    const result = await PedidosModel.getAllPedidos();
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAllPedidosByIdEmpleado = async (req, res) => {
  try {
    const result = await PedidosModel.getPedidoByIdEmpleado(
      req.params.usuario_asignado
    );
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidoById = async (req, res) => {
  try {
    const [result] = await PedidosModel.getPedidoById(req.params.idPedido);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByIdEmpleadoEstado = async (req, res) => {
  try {
    const result = await PedidosModel.getPedidosByIdEmpleadoEstado(
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
    const [result] = await PedidosModel.createPedido(req.body);
    const [pedido] = await PedidosModel.getPedidoById(result.idPedido);
    res.json(pedido[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

//UPDATE
const updatePedido = async (req, res) => {
  try {
    const { idPedido } = req.params;
    const [result] = await PedidosModel.updatePedido(idPedido, req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toPendienteValidar = async (req, res) => {
  try {
    const [result] = await PedidosModel.toPendienteValidar(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toRectificar = async (req, res) => {
  try {
    const [result] = await PedidosModel.toRectificar(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toValidado = async (req, res) => {
  try {
    const [result] = await PedidosModel.toValidado(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toEnTransito = async (req, res) => {
  try {
    const [result] = await PedidosModel.toEnTransito(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toPendienteRecepcionar = async (req, res) => {
  try {
    const [result] = await PedidosModel.toPendienteRecepcionar(
      req.params.idPedido
    );
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const toFinalizado = async (req, res) => {
  try {
    const [result] = await PedidosModel.toFinalizado(req.params.idPedido);
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
