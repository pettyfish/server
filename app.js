// server/app.js
const express = require('express');
const app = express();

const goodsRouter = require('./router/goods.js');
const articlesRouter = require('./router/articles.js');

// server/app.js
/* 允许跨域访问*/
app.all('*', function(req, res, next) {
    // CORS配置
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(goodsRouter);
app.use(articlesRouter);


app.listen(3008, function(){
    console.log('接口服务已启动，访问3008');
});