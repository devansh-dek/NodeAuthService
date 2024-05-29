const express = require('express');
const UserController = require('../../controllers/user-controller');
console.log("The user controller is ", UserController.createUser);


const router = express.Router();

router.post('/user', UserController.createUser);


module.exports = router;