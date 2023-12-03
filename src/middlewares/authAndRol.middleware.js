const jsonwebtoken = require('jsonwebtoken');

const EmpleadosModel = require('../models/empleado.model');

const checkToken = async (req, res, next) => {

    // Comprobar si el token viene incluido en la cabecera
    if (!req.headers['authorization']) {
        return res.status(403).json({ fatal: 'Necesitas la cabecera de authorization' });
    }

    const token = req.headers['authorization'];
    // Comprobar si el token es válido
    let payload;
    try {
        payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.status(403).json({ fatal: error.message });
    }

    // Recuperar el usuario que realiza la petición
    const user = await EmpleadosModel.getEmpleadoById(payload.idEmpleado);
    req.user = user;


    next();
}


const isEncargado = (req, res, next) => {
    try {
      const userPuesto = req.user.puesto;
      if (userPuesto === 'Encargado') {
        next();
      } else {
        res.status(403).json({ error: 'Acceso no autorizado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al verificar el puesto del usuario.' });
    }
  };
  
  const isEmpleado = (req, res, next) => {
    try {
      const userPuesto = req.user.puesto;
      if (userPuesto === 'Empleado') {
        next();
      } else {
        res.status(403).json({ error: 'Acceso no autorizado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al verificar el puesto del usuario.' });
    }
  };
 
  const isAdmin = (req, res, next) => {
    try {
      const userPuesto = req.user.puesto;
      if (userPuesto === 'Administrador') {
        next();
      } else {
        res.status(403).json({ error: 'Acceso no autorizado .' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al verificar el puesto del usuario.' });
    }
  };
  


module.exports = {
    checkToken,
    isAdmin,
    isEmpleado,
    isEncargado
};