const mysql = require("mysql2");

// const databaseConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "tiendamueble",
// });

// Clever Cloud
const databaseConnection = mysql.createConnection({
  host: "bmvmynxpq2cqs0xovch5-mysql.services.clever-cloud.com",
  user: "ulwwc3qzy0kva7ca",
  database: "bmvmynxpq2cqs0xovch5",
  password: "VEmHowiwP2JgxuTVubkg",
});

databaseConnection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor conectado a MYSQL");
  }
});

module.exports = databaseConnection;
