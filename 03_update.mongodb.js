use('ecommerce');
// UPDATE ONE
// db.products.updateOne(
//     {name:"Wireless Mouse"},
//     {$set:{price:899}}
// );

//UPDATE MANY
// db.products.updateMany(
//     {category:"Electronics"},
//     { $inc :{stock:11}}
// );

//USING $push TO ADD TO ARRAYS
db.products.updateOne(
    {name:"Wireless Mouse"},
    {$push:{tags:"Mouse"}}
)