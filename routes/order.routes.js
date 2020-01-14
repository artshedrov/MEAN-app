const express = require('express');
const controller = require('../controllers/order.controller.js');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllOrder);
router.post('/', passport.authenticate('jwt', {session: false}), controller.addOrder);

module.exports = router;
