const express = require('express');
const router = express.Router();
const items = require('../controllers/items')
const auth = require('../middleware/auth')


router.get('/', auth, items.getItems);
router.get('/approving', auth, items.ApprovingItems);
router.post('/bucket', auth, items.BucketItems);
router.post('/', auth,  items.DeclarateItem)
router.delete('/', auth, items.DeleteItem)
router.delete('/deletecomment', auth, items.DeleteComment)
router.put('/', auth, items.AddComment)
router.get('/rejected', auth, items.RejectedItems)
router.put('/statement', auth, items.AddStatement)
router.get('/:category', items.CategoryItems)
router.get('/:category/:itemid', items.FinalItem)

module.exports = router;