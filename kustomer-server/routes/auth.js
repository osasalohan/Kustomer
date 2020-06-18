const express = require('express');
const router = express.Router();
const customer = require('../handlers/customerAuth');
const professional = require('../handlers/professionalAuth');

router.post('/professional/signup', professional.signup);
router.post('/professional/signin', professional.signin);
router.post('/customer/signup', customer.signup);
router.post('/customer/signin', customer.signin);

module.exports = router;