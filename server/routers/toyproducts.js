const express = require('express');
const router = express.Router();
const toyproductController = require('../Controller/toyproductController');
/**
 * Custom routers
 */
router.get('/', toyproductController.homepage);
router.get('/add', toyproductController.addToy);
router.post('/add', toyproductController.postToy);


module.exports = router;