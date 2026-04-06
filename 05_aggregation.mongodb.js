use('ecommerce');
// db.sales.insertMany([
// { _id: 1, item: "Apple",  price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5,  quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8,  quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6,  quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango",  price: 15, quantity: 3, category: "Fruit" }
// ]);

//AGGREGATE FRAMEWORK
//TOTAL REVENUE FROM ALL ORDERS
// db.orders.aggregate([
//     {$group:{_id:null,totalRevenue:{$sum:"$total"}}}
// ])

//Group by status
// db.orders.aggregate([
//     {$group: {_id: "$status",totalOrders: { $sum: 1} }}
// ])

//LOOKUP (JOIN WITH PRODUCTS)
// db.orders.aggregate([
//     {$lookup: {
//       from: "products",
//       localField: "product.name",
//       foreignField: "name",
//       as: "productDetails"
//     }}
// ])

//EXAMPLE1: $match : Filter doc
//Let's get only sales where category is "Fruit"
// db.sales.aggregate([
//     {$match:{category:"Fruit"}}
// ])

//EXAMPLE2: $project : Select specific fields
//Let's display only "item" and "price" and hide _id.
// db.sales.aggregate([
//     {$project:{_id:0,item:1,price:1}}
// ])

//EXAMPLE3: $group : GROUP AND CALCULATE TOTALS
//Calculate total sales(price*quantity) for each category
// db.sales.aggregate([
//     {$group:{_id:"category", totalSales:{$sum:{$multiply:["$price","$quantity"]}}}}
// ])

//EXAMPLE4: $sort :SORT RESULTS
//Sort total sales in descending order
// db.sales.aggregate([
//     {$group:{_id:"category", totalSales:{$sum:{$multiply:["$price","$quantity"]}}}},
//     {$sort:{totalSales:-1}}
// ])

//EXAMPLE5: Combine $match+$group
//Find total sales for only Fruits
db.sales.aggregate([
    {$match:{category:"Fruit"}},
    {$group:{_id:null,totalFruitSales:{$sum:{$multiply:["$price","$quantity"]}}}}
]);