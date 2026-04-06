use('ecommerce');
 //db.sales.find()
// db.sales.getIndexes()
// db.sales.createIndex({ quantity: 1 })
db.products.find({price:{$gt:5000}}).explain("executionStats");
//db.products.createIndex({name:1})