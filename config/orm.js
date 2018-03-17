var connection = require("../config/connection.js");
var orm = {
  select: function(callB) {
    connection.query("SELECT * FROM burgers;", function(err, result) {
      if (err) {
        throw err;
      }
      callB(result);
    });
  },
  new: function(name, callB) {
    var values = {
      burger_name: name,
      devoured: false
    }
    connection.query("INSERT INTO burgers SET ?", values, function(err, result) {
      if (err) {
        throw err;
      }
      callB(result);
    });
  },
  update: function(burgerId, callB) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    var values = [{devoured: true}, {id: burgerId}]
    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      callB(result);
    });
  }
};
module.exports = orm;