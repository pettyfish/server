// server/app.js
const express = require('express');
const app = express();

const router = express.Router();
const goodsData = require('./mock/goods.json');
const articlesData = require('./mock/articles.json');

router.get('/goods', function(req, res, next){
    res.json(goodsData);
});
router.get('/articles', function(req, res, next){
    res.json(articlesData);
});

app.use(router);
app.listen(3008, function(){
    console.log('接口服务已启动，访问3008');
});