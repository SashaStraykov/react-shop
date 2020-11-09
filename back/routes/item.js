const express = require('express');
const router = express.Router();
const items = require('../controllers/items')
const auth = require('../middleware/auth')
const checkFilesMulter = require('../middleware/multer')



router.get('/', items.getItems);
router.post('/', auth, checkFilesMulter.checkFiles, items.DeclarateItem)
router.delete('/', auth, items.DeleteItem)
router.put('/', auth, items.AddComment)
router.put('/statement', auth, items.AddStatement)
router.get('/:category', items.CategoryItems)
router.get('/:category/:itemid', items.FinalItem)
module.exports = router;