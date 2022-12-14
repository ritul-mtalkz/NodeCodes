const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"

// Inserting tha data into MongoDB
MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db("userData")
    var myObj = [
      { name: 'Ritul', address: 'Delhi'},
      { name: 'Singh', address: 'Delhi'},
      { name: 'Singh', address: 'East Delhi'},
      { name: 'Hannah', address: 'Mountain 21'},
      { name: 'Michael', address: 'Valley 345'},
      { name: 'Sandy', address: 'Ocean blvd 2'},
      { name: 'Betty', address: 'Green Grass 1'},
      { name: 'Richard', address: 'Sky st 331'},
      { name: 'Susan', address: 'One way 98'}
    ];
    dbo.collection("customers").insertMany(myObj, function(err, res) {
      if (err) throw err
      console.log("Number of documents inserted: " + res.insertedCount)
      db.close()
    })
  })

// Finding the data from mongodb
MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db("userData")
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err
      console.log(result)
      db.close()
    })
  })

// Finding and Sorting the result
MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db("userData")
    var mySort = { name: 1 } // -1 for descending or 1 for ascending
    dbo.collection("customers").find().sort(mySort).toArray(function(err, result) {
      if (err) throw err
      console.log(result)
      db.close()
    })
  })

// Delete one document data from mongoDB
MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db("userData")
    var myQuery = { address: 'Mountain 21' }
    dbo.collection("customers").deleteOne(myQuery, function(err, obj) {
      if (err) throw err
      console.log("1 document deleted")
      db.close()
    })
  })

// Updating one data
MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db("userData")
    var myQuery = { address: "Valley 345" }
    var newValues = { $set: {name: "Ritul", address: "Noida" } };
    dbo.collection("customers").updateOne(myQuery, newValues, function(err, res) {
      if (err) throw err
      console.log("1 document updated")
      db.close()
    })
  })

// var url = "mongodb://localhost";
// const mongoConn = new MongoClient(url);
// mongoConn.connect();
// const mongoDB = mongoConn.db("NewDB");
// console.log(mongoDB);