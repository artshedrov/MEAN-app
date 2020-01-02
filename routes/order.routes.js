const express = require('express');
const controller = require('../controllers/order.controller.js');
const router = express.Router();

router.get('/', controller.getAllOrder);
router.post('/', controller.addOrder);

module.exports = router;
