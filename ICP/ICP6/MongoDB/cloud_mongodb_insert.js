/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://dbuser:dbpwd@cluster0-5tqz8.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("studentDetails");
    var myobj = [
        { name: 'John', address: 'Highway 71',Age:20},
        { name: 'Peter', address: 'Lowstreet 4',Age:20},
        { name: 'Amy', address: 'Apple st 652',Age:20},
        { name: 'Hannah', address: 'Mountain 21',Age:40},
        { name: 'Michael', address: 'Valley 345',Age:30},
    ];
    dbase.collection("student").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        db.close();
    });
});