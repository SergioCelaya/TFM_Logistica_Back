const PedidoModel = require('../models/pedido.model');
const AlmacenModel = require('../models/almacen.model');

const checkPedidoId = async (req, res, next) => {
    const { idPedido } = req.params;

    try {
        const pedido = await PedidoModel.getPedidoById(idPedido);

        if (!pedido) {
            return res.status(404).json({ error: 'No se ha encontrado el pedido.' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const validatePedido = async (req, res, next) => {
    const { numero_pedido, fecha_creacion, almacen_origen, almacen_destino, fecha_entrega, usuario_asignado, usuario_responsable, estado, id_transporte, detalle_pedido } = req.body;

    // Validar campos requeridos
    if (!numero_pedido || !fecha_creacion || !almacen_origen || !almacen_destino || !fecha_entrega || !usuario_asignado || !usuario_responsable || !estado || !id_transporte || !detalle_pedido) {
        return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }

    // Verificar existencia de almacén origen
    const almacenOrigen = await AlmacenModel.getAlmacenById(almacen_origen);
    if (!almacenOrigen[0]) {
        return res.status(404).json({ error: 'No se ha encontrado el almacén de origen.' });
    }

    // Verificar existencia de almacén destino
    const almacenDestino = await AlmacenModel.getAlmacenById(almacen_destino);
    if (!almacenDestino[0]) {
        return res.status(404).json({ error: 'No se ha encontrado el almacén de destino.' });
    }

    next();
};

module.exports = {
    checkPedidoId,
    validatePedido
};
