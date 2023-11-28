const AlmacenModel = require('../models/almacen.model');

const checkAlmacenId = async (req, res, next) => {
    const { idAlmacen } = req.params;
    try{
        const [almacen] = await AlmacenModel.getAlmacenById(idAlmacen);
      
        if(!almacen[0]) {
            return res.json({ error: 'No se ha encontrado el almacén' });
        }

        next();
    }catch(error){
        res.json({ error: error.message });
    }
    
}

const validateAlmacen = (req, res, next) => {

  const { nombre_almacen, long, lat } = req.body;

  if (!nombre_almacen || !long || !lat) {

    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  next(); 
};


module.exports = {
    checkAlmacenId,
    validateAlmacen
}