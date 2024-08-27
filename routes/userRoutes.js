const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

module.exports = (app) => {
  // User registration route
  router.post('/register', userController.registerUser);

  // User login route
  router.post('/login', userController.loginUser);

  // User profile management route
  router.put('/:username', userController.updateUserProfile);

  // Default route for root path
  router.get('/', (req, res) => {
    res.send('All is in order!');
  });

  app.use('/users', router);
};