const express = require('express');
const controller = require('../controllers/position.controller.js');
const router = express.Router();

router.get('/categoryId', controller.getPositionByCategoryId);
router.post('/', controller.addPosition);
router.patch('/:id', controller.updatePositionById);
router.delete('/:id', controller.deletePositionById);

module.exports = router;
