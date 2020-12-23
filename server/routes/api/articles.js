const express  = require('express');
let router = express.Router();
const { checkLoggedIn } = require('../../middleware/auth');
const { grantAccess } = require('../../middleware/roles');

// model 
const { Article } = require('../../models/article_model');

// add single article
// admin get,patch,delete single article (draft or public)
// get articles no auth
// fetch articles load more
// fetch articles, with pagination








module.exports = router;