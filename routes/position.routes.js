const express = require('express');
const controller = require('../controllers/position.controller.js');
const router = express.Router();

router.get('/categoryId', passport.authenticate('jwt', {session: false}), controller.getPositionByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), controller.addPosition);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.updatePositionById);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.deletePositionById);

module.exports = router;
