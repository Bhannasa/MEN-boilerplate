const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const BAD_GATEWAY = require('../controllers/bad_gateway');

router.use('/auth', authRoutes);
router.use('*', BAD_GATEWAY)

module.exports = router;