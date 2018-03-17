var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
      connection = mysql.createConnection({
      port: 3000,
      Host: "localhost",
      user: "root",
      password: "Sunshine90!",
      database: "burgers_db"
  })
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connect.threadId);
});
module.exports = connection;