const router = require("express").Router();
const AlmacenController = require('../../controllers/almacenes.controller')

// GET

router.get('/', AlmacenController.getAllAlmacenes);

router.get('/:idAlmacen', AlmacenController.getAlmacenById);


router.post('/', AlmacenController.createAlmacen);

// UPDATE

router.put('/:idAlmacen', AlmacenController.updateAlmacen);

router.put('/toActive/:idAlmacen', AlmacenController.updateAlmacenToActive);

router.put('/toInactive/:idAlmacen', AlmacenController.updateAlmacenToInactive);

















module.exports = router;