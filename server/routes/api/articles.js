const express  = require('express');
let router = express.Router();
const { checkLoggedIn } = require('../../middleware/auth');
const { grantAccess } = require('../../middleware/roles');

// model 
const { Article } = require('../../models/article_model');








module.exports = router;