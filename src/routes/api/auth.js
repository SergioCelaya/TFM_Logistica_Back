const router = require("express").Router();
const { checkToken } = require('../../middlewares/authAndRol.middleware')
const AuthController = require('../../controllers/auth.controller');
const PruebaController = require('../../controllers/prueba-auth.controller');


router.post('/', AuthController.login);
router.post('/getUser',checkToken,AuthController.getUser)
//Ruta de prueba para comprobar la generación de los tokens
//y que se obtienen los usuarios correctamente de este
router.post('/pruebaAuth',checkToken,PruebaController.pruebaAuth)


module.exports = router;