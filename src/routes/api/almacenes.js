const router = require("express").Router();
const AlmacenController = require('../../controllers/almacenes.controller');
const {checkAlmacenId, validateAlmacen} = require('../../middlewares/almacenes.middleware')

// GET

router.get('/', AlmacenController.getAllAlmacenes);
router.get('/activos', AlmacenController.getAllAlmacenesActivos);
router.get('/:idAlmacen', AlmacenController.getAlmacenById);

router.post('/', validateAlmacen, AlmacenController.createAlmacen);

// UPDATE

router.put('/:idAlmacen', checkAlmacenId, validateAlmacen, AlmacenController.updateAlmacen);

router.put('/toActive/:idAlmacen', checkAlmacenId, AlmacenController.updateAlmacenToActive);

router.put('/toInactive/:idAlmacen', checkAlmacenId, AlmacenController.updateAlmacenToInactive);

















module.exports = router;