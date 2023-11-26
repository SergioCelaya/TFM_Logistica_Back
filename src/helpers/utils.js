const dayjs = require('dayjs');
const jsonwebtoken = require('jsonwebtoken');

const createToken = (user) => {
    const payload = {
        idEmpleado: user.idempleado,
        puesto: user.puesto,
        exp: dayjs().add(7, 'days').unix()
    }
    return jsonwebtoken.sign(payload, process.env.SECRET_KEY);
}

module.exports = {
    createToken
}