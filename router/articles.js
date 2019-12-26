const express = require('express');

const router = express.Router();
const articlesData = require('../mock/articles.json');

router.get('/articles', function(req, res, next){
    res.json(articlesData);
});

exports = module.exports = router;
