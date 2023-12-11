const EstadosModel = require("../models/estados.model");

const getEstadosPedido = async (req, res) => {
  try {
    const [result] = await EstadosModel.getEstadosPedido(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const insertEstadoPedido = async (idPedido, fechaCambio) => {
  try {
    await EstadosModel.insertEstadoPedido(idPedido, fechaCambio);
  } catch (error) {
    console.error("Error al insertar el registro en estados_pedidos:", error.message);
  }
};

module.exports = {
  getEstadosPedido,
  insertEstadoPedido,
};
