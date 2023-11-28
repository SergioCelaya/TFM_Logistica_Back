const IncidenciaModel = require('../models/incidencia.model');

const checkIncidenciaId = async (req, res, next) => {
    const { idIncidencia } = req.params;
    try{
        const [incidencia] = await IncidenciaModel.getIncidenciaById(idIncidencia);
      
        if(!incidencia[0]) {
            return res.json({ error: 'No hay ninguna incidencia registrada con ese ID.' });
        }

        next();
    }catch(error){
        res.json({ error: error.message });
    }
    
}

/**

 * Valida la incidencia y modifca el req.body con los campos idpedido_asociado
 * y tipo_incidencia, en el caso de que se le haya pasado un número decimal como string
 
 */
const validateIncidencia = (req, res, next) => {
    const { titulo, descripcion, idpedido_asociado, tipo_incidencia, vista } = req.body;

    if (!titulo || !descripcion || !idpedido_asociado || !tipo_incidencia) {
      return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }

    const parsedIdpedidoAsociado = parseInt(idpedido_asociado, 10);
    const parseTipoIncidencia = parseInt(tipo_incidencia, 10);

    if (typeof titulo !== 'string' ||
        typeof descripcion !== 'string' ||
        isNaN(parsedIdpedidoAsociado) ||
        isNaN(parseTipoIncidencia) ||
        (vista !== undefined && (isNaN(vista) || vista < 0 || vista > 1))
        ){
      
            return res.status(400).json({ error: 'Tipos de datos incorrectos en los campos o la vista no es 0 ni 1.' });
    }

    req.body = Object.assign(req.body, {
        titulo,
        descripcion,
        idpedido_asociado: parsedIdpedidoAsociado,
        tipo_incidencia: parseTipoIncidencia,
        vista,
      });

    next();
  };

module.exports = {
    checkIncidenciaId,
    validateIncidencia
}