const databaseConnection = require("../../config/database.js");

const renderHome = (req, res) => {
  databaseConnection.query("SELECT * FROM categorias", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.render("pages/index", {
        data,
      });
    }
  });
};

const getAllProducts = (req, res) => {
  databaseConnection.query("SELECT * FROM productos", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      // const producto = data.filter((prod) => (prod.id = "5"));
      res.render("pages/productos", { data });
    }
    // res.render("pages/productos");
  });
};

const getForm = (req, res) => {
  res.render("pages/formulario");
};

const addnewProduct = (req, res) => {
  const { producto, categoria, descripcion, precio } = req.body;
  // databaseConnection.query(
  //   'INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES("silla-madera","sillas","/imagenes/estilo-madera.png","una breve descripcion del producto",1000)',
  //   (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       res.send("Recibido!");
  //     }
  //   }
  // );

  // console.log(req.body);
  // res.send("Recibido!");

  databaseConnection.query(
    'INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',
    [producto, categoria, descripcion, parseInt(precio)],
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        // res.send("Recibido!");
        // res.redirect("/tienda/productos");
        res.redirect("/productos");
        // res.redirect("/productos");
      }
    }
  );
};

module.exports = { renderHome, getAllProducts, getForm, addnewProduct };
