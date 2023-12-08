const PedidosModel = require("../models/pedido.model");
const EmpleadosModel = require("../models/empleado.model");
const { addPaginado } = require("../helpers/utils");

async function addEmpleadosPedidos(pedidos) {
  let result = [];
  for (let pedido of pedidos) {
    let [empleado] = await EmpleadosModel.getEmpleadoById(
      pedido.usuario_asignado
    );
    pedido.usuario_asignado = empleado[0];
    let [encargado] = await EmpleadosModel.getEmpleadoById(
      pedido.usuario_responsable
    );
    pedido.usuario_responsable = encargado[0];
    result.push(pedido);
  }
  return result;
}
//GET
const getAllPedidos = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidos();
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    let [pedidos] = await PedidosModel.getAllPedidos(
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
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
    const [pedidos] = await PedidosModel.getPedidoByIdEmpleado(
      req.params.usuario_asignado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
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
    const [pedidos] = await PedidosModel.getPedidoByIdResponsable(
      req.params.usuario_responsable,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};
const getAllPedidosByEstado = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByEstado(req.params.estado);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getAllPedidosByEstado(
      req.params.estado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidoById = async (req, res) => {
  try {
    const [pedido] = await PedidosModel.getPedidoById(req.params.idPedido);
    let [empleado] = await EmpleadosModel.getEmpleadoById(
      pedido[0].usuario_asignado
    );
    pedido[0].usuario_asignado = empleado[0];
    let [encargado] = await EmpleadosModel.getEmpleadoById(
      pedido[0].usuario_responsable
    );
    pedido[0].usuario_responsable = encargado[0];
    res.json(pedido);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidoByNumPedido = async (req, res) => {
  try {
    const [pedido] = await PedidosModel.getPedidoByNumPedido(
      req.params.numPedido
    );
    if (pedido[0]) {
      let [empleado] = await EmpleadosModel.getEmpleadoById(
        pedido[0].usuario_asignado
      );
      pedido[0].usuario_asignado = empleado[0];
      let [encargado] = await EmpleadosModel.getEmpleadoById(
        pedido[0].usuario_responsable
      );
      pedido[0].usuario_responsable = encargado[0];
      res.json(pedido[0]);
    } else {
      res.json({});
    }
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByIdEmpleadoEstado = async (req, res) => {
  try {
    console.log(req.params);
    const [total] = await PedidosModel.getNumPedidosByIdEmpleadoEstado(
      req.params.usuario_asignado,
      req.params.estado
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getPedidosByIdEmpleadoEstado(
      req.params.usuario_asignado,
      req.params.estado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
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
    const [pedidos] = await PedidosModel.getPedidosByIdResponsableEstado(
      req.params.usuario_responsable,
      req.params.estado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByAlmacenOrigen = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByAlmacenOrigen(
      req.params.almacen_origen
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getPedidosByAlmacenOrigen(
      req.params.almacen_origen,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosByAlmacenDestino = async (req, res) => {
  try {
    const [total] = await PedidosModel.getNumPedidosByAlmacenDestino(
      req.params.almacen_destino
    );
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getPedidosByAlmacenDestino(
      req.params.almacen_destino,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosDeEncargado = async (req, res) => {
  try {
    console.log(req.params);
    const [total] = await PedidosModel.getNumPedidosEncargado(
      req.params.idalmacen,
      req.params.idempleado
    );
    console.log(total);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getPedidosEncargado(
      req.params.idalmacen,
      req.params.idempleado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosEncargadosValidar = async (req, res) => {
  try {
    console.log(req.params);
    const [total] = await PedidosModel.getPedidosNumEncargadoValidar(
      req.params.idalmacen,
      req.params.idempleado
    );
    console.log(total);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getPedidosEncargadoValidar(
      req.params.idalmacen,
      req.params.idempleado,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPedidosEncargadosRecepcionar = async (req, res) => {
  try {
    console.log(req.params);
    const [total] = await PedidosModel.getPedidosNumEncargadoRecepcionar(
      req.params.idalmacen
    );
    console.log(total);
    const pagina =
      (req.params.pagina - 1) * parseInt(process.env.ELEMENTOS_POR_PAGINA);
    const [pedidos] = await PedidosModel.getPedidosEncargadoRecepcionar(
      req.params.idalmacen,
      parseInt(process.env.ELEMENTOS_POR_PAGINA),
      pagina
    );
    res.json(
      addPaginado(
        req.params.pagina,
        total[0].total,
        await addEmpleadosPedidos(pedidos)
      )
    );
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

//CREATE
const createPedido = async (req, res) => {
  try {
    console.log(req.body);
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
    console.log(req.body);
    console.log(req.params);
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
  getPedidoByNumPedido,
  getAllPedidosByIdEmpleado,
  getAllPedidosByEstado,
  getAllPedidosByIdResponsable,
  getPedidosByIdEmpleadoEstado,
  getPedidosByIdResponsableEstado,
  getPedidosDeEncargado,
  getPedidosEncargadosValidar,
  getPedidosEncargadosRecepcionar,
  createPedido,
  updatePedido,
  toPendienteValidar,
  toRectificar,
  toValidado,
  toEnTransito,
  toPendienteRecepcionar,
  toFinalizado,
};
