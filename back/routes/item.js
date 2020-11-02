const express = require('express');
const router = express.Router();
const items = require('../controllers/items')


router.get('/', items.getItems);
router.post('/', items.DeclarateItem)
router.delete('/', items.DeleteItem)
router.put('/', items.AddComment)
router.put('/statement', items.AddStatement)
router.get('/:category', items.CategoryItems)
router.get('/:category/:itemid', items.FinalItem)
module.exports = router;