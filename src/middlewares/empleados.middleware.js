const EmpleadoModel = require('../models/empleado.model');

const checkEmpleadoId = async (req, res, next) => {
    const { idEmpleado } = req.params;
    try{
        const [empleado] = await EmpleadoModel.getEmpleadoById(idEmpleado);
      console.log(empleado)
        if(!empleado[0]) {
            return res.json({ error: 'No se ha encontrado el empleado' });
        }

        next();
    }catch(error){
        res.json({ error: error.message });
    }
    
}

const validateEmpleado = (req, res, next) => {
    const {
      email,
      pwd,
      nombre,
      apellidos,
      puesto,
      idalmacen,
      num_empleado,
      activo,
      fecha_contratacion,

    } = req.body;
  
    if (!email || !pwd || !nombre || !apellidos || !puesto || !idalmacen || !num_empleado || !activo || !fecha_contratacion) {
      return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }
  
    if (typeof email !== 'string' ||
        typeof pwd !== 'string' ||
        typeof nombre !== 'string' ||
        typeof apellidos !== 'string' ||
        isNaN(puesto) ||
        isNaN(idalmacen) ||
        typeof num_empleado !== 'string' ||
        isNaN(activo) ||
        isNaN(Date.parse(fecha_contratacion))) {
      return res.status(400).json({ error: 'Tipos de datos incorrectos en los campos.' });
    }
  
    next();
  };


module.exports = {
    checkEmpleadoId,
    validateEmpleado
}