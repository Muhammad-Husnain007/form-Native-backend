const express = require('express');
const AuthenticationController = require('../allControllers/AuthenticationController');
const EcommerceController = require('../allControllers/EcommerceController');
const router = express.Router();

// ======>>>>>>> Auth Routes ==========

router.post('/Signup', AuthenticationController.signup );
router.post('/Signin', AuthenticationController.login);
router.get('/Token', AuthenticationController.protected, AuthenticationController.login);

// ======>>>>>>> E-commerce Api Routes ==========
 
router.post('/api', EcommerceController.addData)
router.get('/api', EcommerceController.getData)
router.get('/api/:id',  EcommerceController.getDataById)    // by id
router.put('/api/:id',  EcommerceController.putData)
router.delete('/api/:id',  EcommerceController.deleteData)

module.exports = router;