const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user-controllers');

router.get("/filter", userControllers.getUserByFilter);

module.exports = router;