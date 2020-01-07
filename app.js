// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser'); // 解析中间件（post请求）
const db = require('./config/key.js').mongoURI;
const usersRouter = require('./router/api/user.js');
const goodsRouter = require('./router/goods.js');
const articlesRouter = require('./router/articles.js');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// 链接云上mongo数据库
mongoose.connect(db,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongoose链接成功'))
    .catch(err => console.log(`Mongoose链接失败${err}`));

// 本地模拟数据

app.use(goodsRouter);
app.use(articlesRouter);
app.use('/api/users',usersRouter);
// 访问URI响应数据
app.get('/', function(req, res){
    res.send('Hello World!')
});


// server/app.js
/* 允许跨域访问*/
app.all('*', function(req, res, next) {
    // CORS配置
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);


app.listen(3008, function(){
    console.log('接口服务已启动，访问3008');
});
