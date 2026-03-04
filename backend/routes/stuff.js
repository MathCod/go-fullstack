const express = require('express');
const router = express.Router();

const StuffCtrl = require('../controllers/stuff');

router.post('/', StuffCtrl.createThing);
router.put('/:id', StuffCtrl.modifyThing);
router.delete('/:id', StuffCtrl.deleteThing);
router.get('/:id', StuffCtrl.getOneThing);
router.get('/', StuffCtrl.getAllThings);

module.exports = router;