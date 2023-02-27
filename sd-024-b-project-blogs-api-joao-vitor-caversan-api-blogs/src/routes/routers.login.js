const express = require('express');

const loginController = require('../controllers/login.controller');
// const error = require('../middlewares/error');

const routers = express.Router();

routers.post('/', loginController.startLogin);

module.exports = routers;