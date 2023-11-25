//GET
const getNumPedidos = () => {
  return db.query("select count(*) total from pedidos");
};

const getAllPedidos = (numElementos, pagina) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado LIMIT ? OFFSET ?",
    [numElementos, pagina]
  );
};

const getNumPedidosByIdEmpleado = (usuario_asignado) => {
  return db.query(
    "select count(*) total from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_asignado = ? ",
    [usuario_asignado]
  );
};

const getPedidoByIdEmpleado = (usuario_asignado, numElementos, pagina) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_asignado = ? LIMIT ? OFFSET ?",
    [usuario_asignado, numElementos, pagina]
  );
};

const getNumPedidosByIdResponsable = (usuario_responsable) => {
  return db.query(
    "select count(*) total from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_responsable = ? ",
    [usuario_responsable]
  );
};

const getPedidoByIdResponsable = (
  usuario_responsable,
  numElementos,
  pagina
) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_responsable = ? LIMIT ? OFFSET ?",
    [usuario_responsable, numElementos, pagina]
  );
};

const getPedidoById = (idPedido) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.idPedido = ?",
    [idPedido]
  );
};

const getNumPedidosByIdEmpleadoEstado = (usuario_asignado, estado) => {
  return db.query(
    "select count(*) total from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_asignado = ? and ped.estado = ?",
    [usuario_asignado, estado]
  );
};

const getPedidosByIdEmpleadoEstado = (
  usuario_asignado,
  estado,
  numElementos,
  pagina
) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_asignado = ? and ped.estado = ? LIMIT ? OFFSET ?",
    [usuario_asignado, estado, numElementos, pagina]
  );
};

const getNumPedidosByIdResponsableEstado = (usuario_responsable, estado) => {
  return db.query(
    "select count(*) total from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_responsable = ? and ped.estado = ?",
    [usuario_responsable, estado]
  );
};

const getPedidosByIdResponsableEstado = (usuario_responsable, estado) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.usuario_responsable = ? and ped.estado = ?",
    [usuario_responsable, estado]
  );
};

const getNumPedidosByAlmacenOrigen = (almacen_origen) => {
  return db.query(
    "select count(*) total from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.almacen_origen = ?",
    [almacen_origen]
  );
};
const getPedidosByAlmacenOrigen = (almacen_origen, numElementos, pagina) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.almacen_origen = ? LIMIT ? OFFSET ?",
    [almacen_origen, numElementos, pagina]
  );
};

const getNumPedidosByAlmacenDestino = (almacen_destino) => {
  return db.query(
    "select count(*) total from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.almacen_destino = ?",
    [almacen_destino]
  );
};

const getPedidosByAlmacenDestino = (almacen_destino, numElementos, pagina) => {
  return db.query(
    "select idPedido,numero_pedido,fecha_creacion,almacen_origen,almacen_destino,fecha_entrega,usuario_asignado,usuario_responsable,est.descripcion estado,id_transporte,detalle_pedido from pedidos ped inner join tipo_estados est on ped.estado = est.idestado where ped.almacen_destino = ? LIMIT ? OFFSET ?",
    [almacen_destino, numElementos, pagina]
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
  detalle_pedido,
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
      detalle_pedido,
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
    detalle_pedido,
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
      detalle_pedido,
      idPedido
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
  return db.query("delete from pedidos where idPedido = ?", [idPedido]);
};

module.exports = {
  getNumPedidos,
  getNumPedidosByAlmacenDestino,
  getPedidosByAlmacenDestino,
  getNumPedidosByAlmacenOrigen,
  getPedidosByAlmacenOrigen,
  getNumPedidosByIdResponsableEstado,
  getPedidosByIdResponsableEstado,
  getNumPedidosByIdResponsable,
  getPedidoByIdResponsable,
  getAllPedidos,
  getPedidoById,
  getNumPedidosByIdEmpleado,
  getPedidoByIdEmpleado,
  getNumPedidosByIdEmpleadoEstado,
  getPedidosByIdEmpleadoEstado,
  createPedido,
  updatePedido,
  toPendienteValidar,
  toRectificar,
  toValidado,
  toEnTransito,
  toPendienteRecepcionar,
  toFinalizado,
  deletePedidoById,
};
