///Controlador de preba para comprobar la generación correcta de los tokens, hasta que no se securice toda la aplicacion

const pruebaAuth = async(req, res) => {
    try {
        res.json({"Resultado":req.user[0]});
      } catch (error) {
        res.json({ fatal: error.message });
      }
  }
  module.exports = {
    pruebaAuth
  }