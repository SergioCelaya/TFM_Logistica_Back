const saveImagenEmpleado = async(req, res) => {
    try {
        console.log(req.params)
        console.log(req)
        res.json({exito:true})
      } catch (error) {
        res.json({ fatal: error.message });
      }
  }

  module.exports = {
    saveImagenEmpleado
  }