const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/tiendaRoutes.js");
const databaseConnection = require("../config/database");
const port = process.env.PORT || 4000;

// uso de EJS y de archivos publicos
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// vamos a recibir info en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// coneccion con MYSQL
databaseConnection.connect();

// Rutas
// app.use("/tienda", routes);
app.use("/", routes);

// Puerto
app.listen(port, () => console.log(`Sever listening on port ${port}!`));
