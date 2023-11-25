const EstadosModel = require("../models/estados.model");

const getEstadosPedido = async (req, res) => {
  try {
    const [result] = await EstadosModel.getEstadosPedido(req.params.idPedido);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getEstadosPedido,
};
