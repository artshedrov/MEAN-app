const express = require('express');
const controller = require('../controllers/category.controller.js');
const router = express.Router();

router.get('/', controller.getAllCategories);
router.get('/:id', controller.getAllCategoryById);
router.delete('/:id', controller.deleteCategoryById);
router.post('/', controller.addCategory);
router.patch('/:id', controller.updateCategory);

module.exports = router;
