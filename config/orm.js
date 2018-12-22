var connection = require("./connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + "(" + cols + ")" +  "VALUES (" + vals + ");";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, {col: vals},  cb) {
        var queryString = "UPDATE " + table + "SET (" + {col:vals} + ") WHERE " + {col:vals} + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;