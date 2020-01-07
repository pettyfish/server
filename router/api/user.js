// @login & register

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // 对密码进行加密
// node版本8 => bcrypt版本为1.0.3
var gravatar = require('gravatar'); // 使用国际公认头像（email绑定）
var jwt = require('jsonwebtoken'); //toekn加密
const passport = require("passport"); // 身份验证
const User= require('../../modules/User.js');
const secret = require('../../config/key.js');

router.get('/test', (req, res) => {
    res.json({
        "msg": "login works"
    })
});

// 注册接口
router.post('/register', (req, res) => {
    // console.log(req.body);
    User.findOne({email: req.body.email}).then((user) => {
        if (user) {
            return req.statusCode(400).json({email: '邮箱已注册'})
        } else {
            let avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});

            const NewUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password,
            });


            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(NewUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    NewUser.password = hash;
                    NewUser.save()
                        .then(user => {
                            res.json(user)
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
            });
        }
    })
});

// 登陆接口
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if (!user) {
                return res.status(400).json({'email': '用户不存在'});
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        let rule = {
                            id: user.id,
                            name: user.name
                        };

                        jwt.sign(rule, secret.secretOrPrivateKey, {expiresIn: '7d'}, (err, token) => {
                            if (err) throw err;
                            res.json({
                                msg:'success',
                                token: "Bearer " + token
                            })
                        });

                        // res.json({msg:'success'});
                    } else {
                        return res.status(400).json({'password': '密码错误'});
                    }
                })
        })
});

router.get('/current', passport.authenticate('jwt', { session: false }),(req,res) => {
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
});

exports = module.exports = router;
