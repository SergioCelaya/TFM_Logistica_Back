const PedidosModel = require("../models/pedido.model");

function addPaginado(pagina, total, respuesta) {
  return (response = {
    TotalElementos: parseInt(total),
    ElementosPagina: parseInt(process.env.ELEMENTOS_POR_PAGINA),
    Pagina: parseInt(pagina),
    Resultado: respuesta,
  });
}

//GET
const getAllPedidos = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidos();
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getAllPedidos(
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAllPedidosByIdEmpleado = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByIdEmpleado(
      req.params.usuario_asignado
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getPedidoByIdEmpleado(
      req.params.usuario_asignado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAllPedidosByIdResponsable = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByIdResponsable(
      req.params.usuario_responsable
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getPedidoByIdResponsable(
      req.params.usuario_responsable,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
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
    const [total] = await PedidosModel.getNumPedidosByIdEmpleadoEstado(
      req.params.usuario_asignado,
      req.params.estado
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getPedidosByIdEmpleadoEstado(
      req.params.usuario_asignado,
      req.params.estado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByIdResponsableEstado = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByIdResponsableEstado(
      req.params.usuario_responsable,
      req.params.estado
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getPedidosByIdResponsableEstado(
      req.params.usuario_responsable,
      req.params.estado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByAlmacenOrigen = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByAlmacenOrigen(req.params.almacen_origen);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getPedidosByAlmacenOrigen(
      req.params.almacen_origen,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByAlmacenDestino = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByAlmacenDestino(req.params.almacen_destino);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const result = await PedidosModel.getPedidosByAlmacenDestino(
      req.params.almacen_destino,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(addPaginado(req.params.pagina, total[0].total, result[0]));
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

//CREATE
const createPedido = async (req, res) => {
  try {
    const [result] = await PedidosModel.createPedido(req.body);
    const [pedido] = await PedidosModel.getPedidoById(result.insertId);
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
  getPedidosByAlmacenOrigen,
  getPedidosByAlmacenDestino,
  getAllPedidos,
  getPedidoById,
  getAllPedidosByIdEmpleado,
  getAllPedidosByIdResponsable,
  getPedidosByIdEmpleadoEstado,
  getPedidosByIdResponsableEstado,
  createPedido,
  updatePedido,
  toPendienteValidar,
  toRectificar,
  toValidado,
  toEnTransito,
  toPendienteRecepcionar,
  toFinalizado,
};
