const express = require('express');
const { createUser, getUserByUserName, editUserByUserName } = require('../controller/userController');

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:user_name', getUserByUserName);
router.patch("/user/:user_name", editUserByUserName);

module.exports = router