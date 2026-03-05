const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

const StuffCtrl = require('../controllers/stuff');

router.post('/', auth, multer, StuffCtrl.createThing);
router.put('/:id', auth, multer, StuffCtrl.modifyThing);
router.delete('/:id', auth, StuffCtrl.deleteThing);
router.get('/:id', auth, StuffCtrl.getOneThing);
router.get('/', auth, StuffCtrl.getAllThings);

module.exports = router;