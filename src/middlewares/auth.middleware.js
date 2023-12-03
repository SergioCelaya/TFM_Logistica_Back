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


module.exports = { checkToken };