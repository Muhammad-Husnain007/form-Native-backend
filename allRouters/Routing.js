const express = require('express');
const AuthenticationController = require('../allControllers/AuthenticationController');
const router = express.Router();

router.post('/Signup', AuthenticationController.signup );
router.post('/Signin', AuthenticationController.login);
router.get('/Token', AuthenticationController.protected, AuthenticationController.login);

module.exports = router;