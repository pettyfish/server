const express = require('express');
const router = express.Router();

const goodsData = require('../mock/goods.json');

router.get('/goods', function(req, res, next){
    res.json(goodsData);
});

exports = module.exports = router;
