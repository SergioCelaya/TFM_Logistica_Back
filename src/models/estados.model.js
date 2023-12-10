const insertEstadoPedido = (idPedido, estado) => {
    return db.query("INSERT INTO estados_pedidos (idpedido, fecha_cambio_estado, idestado) VALUES (?,now(),?)", [idPedido, estado]);
  };
  
  const getEstadosPedido = (idPedido) => {
    return db.query("SELECT idestado, idpedido, fecha_cambio_estado FROM estados_pedidos WHERE idpedido = ?", [idPedido]);
  };
  
  module.exports = {
    getEstadosPedido,
    insertEstadoPedido,
  };
  