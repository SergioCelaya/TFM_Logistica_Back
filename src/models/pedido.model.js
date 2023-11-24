//GET
const getAllPedidos = () => {
  return db.query("select * from pedidos");
};

const getPedidoByIdEmpleado = (usuario_asignado) => {
  return db.query("select * from pedidos where usuario_asignado = ?", [
    usuario_asignado,
  ]);
};

const getPedidoById = (idPedido) => {
  return db.query("select * from pedidos where idPedido = ?", [idPedido]);
};

const getPedidosByIdEmpleadoEstado = (usuario_asignado,estado) => {
  return db.query(
    "select * from pedidos where usuario_asignado = ? and estado = ?",
    [usuario_asignado, estado]
  );
};

//CREATE
const createPedido = ({
  numero_pedido,
  fecha_creacion,
  almacen_origen,
  almacen_destino,
  fecha_entrega,
  usuario_asignado,
  usuario_responsable,
  estado,
  id_transporte,
  detalle_pedido
}) => {
  return db.query(
    "insert into pedidos (numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,estado,id_transporte,detalle_pedido) values (?,?,?,?,?,?,?,?,?,?)",
    [
      numero_pedido,
      fecha_creacion,
      almacen_origen,
      almacen_destino,
      fecha_entrega,
      usuario_asignado,
      usuario_responsable,
      estado,
      id_transporte,
      detalle_pedido
    ]
  );
};

//UPDATE
const updatePedido = (
  idPedido,
  {
    numero_pedido,
    fecha_creacion,
    almacen_origen,
    almacen_destino,
    fecha_entrega,
    usuario_asignado,
    usuario_responsable,
    estado,
    id_transporte,
    detalle_pedido
  }
) => {
  return db.query(
    "update pedidos set numero_pedido = ? , fecha_creacion = ? , almacen_origen = ? , almacen_destino = ? , fecha_entrega = ? , usuario_asignado = ? , usuario_responsable= ? , estado = ? , id_transporte = ? , detalle_pedido = ? where idPedido = ?",
    [
      numero_pedido,
      fecha_creacion,
      almacen_origen,
      almacen_destino,
      fecha_entrega,
      usuario_asignado,
      usuario_responsable,
      estado,
      id_transporte,
      idPedido,
      detalle_pedido
    ]
  );
};

const toPendienteValidar = (idPedido) => {
  return db.query("update pedidos set estado = 1 where idPedido = ?", [
    idPedido,
  ]);
};

const toRectificar = (idPedido) => {
  return db.query("update pedidos set estado = 2 where idPedido = ?", [
    idPedido,
  ]);
};

const toValidado = (idPedido) => {
  return db.query("update pedidos set estado = 3 where idPedido = ?", [
    idPedido,
  ]);
};

const toEnTransito = (idPedido) => {
  return db.query("update pedidos set estado = 4 where idPedido = ?", [
    idPedido,
  ]);
};

const toPendienteRecepcionar = (idPedido) => {
  return db.query("update pedidos set estado = 5 where idPedido = ?", [
    idPedido,
  ]);
};

const toFinalizado = (idPedido) => {
  return db.query("update pedidos set estado = 6 where idPedido = ?", [
    idPedido,
  ]);
};

//DELETE
const deletePedidoById = (idPedido) => {
    return db.query("delete from pedidos where idPedido = ?",[idPedido]);
};


module.exports = {
  getAllPedidos,
  getPedidoById,
  getPedidoByIdEmpleado,
  getPedidosByIdEmpleadoEstado,
  createPedido,
  updatePedido,
  toPendienteValidar,
  toRectificar,
  toValidado,
  toEnTransito,
  toPendienteRecepcionar,
  toFinalizado,
  deletePedidoById
};
