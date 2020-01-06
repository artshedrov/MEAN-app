const express = require('express');
const controller = require('../controllers/category.controller.js');
const passport = require('passport');
const router = express.Router();


router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllCategories);
router.get('/:id', controller.getAllCategoryById);
router.delete('/:id', controller.deleteCategoryById);
router.post('/', controller.addCategory);
router.patch('/:id', controller.updateCategory);

module.exports = router;
