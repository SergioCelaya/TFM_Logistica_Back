const getEstadosPedido = (idPedido) => {
    return db.query("SELECT idestado,idpedido,fecha_cambio_estado FROM estados_pedidos where idpedido = ?",[idPedido]);
};

module.exports = {getEstadosPedido}
