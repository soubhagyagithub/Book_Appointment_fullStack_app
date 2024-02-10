const express = require('express');
const userController = require('../controller/userController');
// const User = require('../model/user')

const router = express.Router();

router.get('/user/get-user',userController.getUser);

router.post('/user/add-user', userController.addUser);

router.delete('/user/delete-user/:id',userController.deleteUser);

router.put('/user/update-user/:id', userController.updateUser);

module.exports = router;