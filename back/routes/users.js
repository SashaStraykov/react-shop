const express = require('express');
const router = express.Router();
const users= require('../controllers/user')

router.post('/registration',
// [
//   check('email', 'uncorrect email').isEmail(),
//   check('password', 'too short pasword').isLength({min:6})
// ],
users.registration
)

router.post('/authorization',
// [
//   check('password', 'uncorrect password').exists()
// ],
users.authorization);

router.post('/checkUser', users.checkUser)

module.exports = router;
