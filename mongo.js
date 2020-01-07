var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fishpond";

/**
 * 1、创建数据库
 */
// MongoClient.connect(url, function (err, db) {
//     if(err){
//         throw err;
//     } else {
//         console.log("数据库已经创建");
//         db.close();
//     }
// })

/**
 * 2、创建集合
 */
MongoClient.connect(url, function (err, db) {
    if(err){
        throw err;
    } else {
        console.log("数据库已经创建");
        var dbase = db.db("fishpond");
        dbase.createCollection('site', function (err, res) {
            if(err) throw err;
            console.log("创建集合");
            db.close();
        })
    }
});

/**
 * 3、插入数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err){
//         throw err;
//     } else {
//         console.log("数据库已经创建");
//         var dbase = db.db("fcedu");
//         var myobj = {name: "新前端技术", url: "songfens.club"};
//         dbase.collection("site").insertOne(myobj, function (err, res) {
//             if(err){
//                 throw err;
//             }
//             console.log("文档插入成功");
//             db.close()
//         })
//     }
// });

/**
 * 4、插入多条数据【多个文档】
 */
// MongoClient.connect(url, function (err, db) {
//     if(err){
//         throw err;
//     } else {
//         console.log("数据库已经创建");
//         var dbase = db.db("fcedu");
//         var myobj = [
//             {name: "丰橙学院", url: "https://fcedu.com", type: 'cn'},
//             {name: "腾讯课堂", url: "https://www.ke.qq.com"},
//             {name: "Google", url: "https://www.google.com", type: 'en'},
//         ]
//         dbase.collection("site").insertMany(myobj, function (err, res) {
//             if(err){
//                 throw err;
//             }
//             console.log("插入文档的数量为：" + res.insertedCount);
//             db.close()
//         })
//     }
// });

/**
 * 5、查询数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err) throw err;
//     var dbase = db.db("fcedu");
//     dbase.collection("site").find({}).toArray(function (err, result) {
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

/**
 * 6、更新数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err){
//         throw err;
//     }
//     var dbase = db.db("fcedu");
//     var whereStr = {"name": "丰橙学院"}; // 查询条件
//     var updateStr = {$set: {"url": "https://fcheng.ke.qq.com/"}};
//     dbase.collection("site").updateOne(whereStr, updateStr, function (err, res) {
//         if(err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     })
// })

/**
 * 7、更新多条数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err){
//         throw err;
//     }
//     var dbase = db.db("fcedu");
//     var whereStr = {"name": "丰橙学院"}; // 查询条件
//     var updateStr = {$set: {"url": "https://fcheng.ke.qq.com"}};
//     dbase.collection("site").updateMany(whereStr, updateStr, function (err, res) {
//         if(err) throw err;
//         console.log(res.result.nModified + "条文档更新成功");
//         db.close();
//     })
// })

/**
 * 8、删除一条数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err) throw err;
//     var dbase = db.db("fcedu");
//     var whereStr = {"name": "丰橙学院"};
//     dbase.collection("site").deleteOne(whereStr, function (err, obj) {
//         if(err) throw err;
//         console.log("文档删除成功");
//         console.log(obj);
//         db.close();
//     })
// })

/**
 * 9、删除多条数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err) throw err;
//     var dbo = db.db("fcedu");
//     var whereStr = {"type": 'cn'}; // 查询条件
//     dbo.collection("site").deleteMany(whereStr, function (err, obj) {
//         if(err) throw err;
//         console.log(obj.result.n + " 条文档被删除");
//         db.close();
//     })
// })

/**
 * 10、排序
 */
// MongoClient.connect(url, function (err, db) {
//     if(err) throw err;
//     var dbo = db.db("fcedu");
//     var mysort = { type: -1 };
//     dbo.collection("site").find().sort(mysort).toArray(function (err, result) {
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

/**
 * 11、查询分页 limit 只接受一个参数，指定返回的条数
 */
// MongoClient.connect(url, function (err, db) {
//     if(err) throw err;
//     var dbo = db.db("fcedu");
//     dbo.collection("site").find().limit(2).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// })

/**
 * 12、查询分页 skip 跳过前面两条数据，读取两条数据
 */
// MongoClient.connect(url, function (err, db) {
//     if(err) throw err;
//     var dbo = db.db("fcedu");
//     dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// })

/**
 * 13、$lookup 实现左连接
 */
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("fcedu");
//     var myobj =  [
//         { _id: 1, product_id: 154, status: 1 }
//     ];
//     dbo.collection("orders").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("fcedu");
//     var myobj =  [
//         { _id: 154, name: '笔记本电脑' },
//         { _id: 155, name: '耳机' },
//         { _id: 156, name: '台式电脑' }
//     ];
//     dbo.collection("products").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("fcedu");
//     dbo.collection('orders').aggregate([
//         { $lookup:
//             {
//                 from: 'products',            // 右集合
//                 localField: 'product_id',    // 左集合 join 字段
//                 foreignField: '_id',         // 右集合 join 字段
//                 as: 'orderdetails'           // 新生成字段（类型array）
//             }
//         }
//     ]).toArray(function(err, res) {
//         if (err) throw err;
//         console.log(JSON.stringify(res));
//         db.close();
//     });
// });
/**
 * 14、使用 drop() 方法来删除集合
 */
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("fcedu");
//     // 删除 test 集合
//     dbo.collection("products").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
//         if (err) throw err;
//         if (delOK) console.log("集合已删除");
//         db.close();
//     });
// });