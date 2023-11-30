const bcrypt = require('bcryptjs');
const { createToken } = require('../helpers/utils');
const EmpleadosModel = require('../models/empleado.model')

const login = async (req, res) => {
    try {
        const { email, pwd } = req.body;

        const [user] = await EmpleadosModel.getEmpleadoByEmailConPwd(email);
        if (!user) {
            return res.json({ fatal: 'Error en idUsuario y/o password' });
        }
        // ¿Coincide la password de la BD con la del body?
        const equals = bcrypt.compareSync(pwd, user[0].pwd);
        if (!equals) {
            return res.json({ fatal: 'Error en email y/o password' });
        }
        const [userCompleto] = await EmpleadosModel.getEmpleadoById(user[0].idempleado)
        res.json({
            success: 'Login correcto!',
            token: createToken(userCompleto[0])
        });

    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getUser= async(req,res) =>{
    try {
        res.json(req.user[0]);
      } catch (error) {
        res.json({ fatal: error.message });
      }
}

module.exports={
    login,
    getUser
}