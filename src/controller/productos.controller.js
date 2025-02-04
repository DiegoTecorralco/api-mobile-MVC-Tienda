//aqui va a ir el controller de productos
import productosDAO from "../DAO/productos.dao.js";

const productosController = {};

productosController.getAll = (req, res) => {
    productosDAO.getAll()
        .then((productos) => {
          /*console.log(productos);
            res.json({
                data: productos
            });*/
            res.render('../src/views/index.ejs', {productos});  //es para que en lugar de responder un json renderice lo que esta en la ruta que le especificamos que es la de '../src/views/index.ejs' y le ponemos los estudiantes para despues mandar a traer los estudiantes
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message
                }
            });
        });
};



// Controlador para obtener un estudiante por ID
productosController.getOne = (req, res) => {
    productosDAO.getOne(req.params.producto_id)
        .then((producto) => {
           /* if (producto !== null) {
                res.json({
                    data: producto
                });
            } else {
                res.json({
                    message: "producto not found"
                });
            }*/
           res.render('../src/views/edit.ejs', {producto});
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message
                }
            });
        });
};

productosController.insert=(req,res)=>{
    productosDAO.insert(req.body)
    .then((reponse)=>{
       /*res.json({
            data:{ message: "producto saved"},
            producto: response
        })*/
       res.redirect('/api/productos/getAll'); //hago la peticion a otro enpoint para que parezca que se recarga la pagina
    })
    .catch((error)=>{
        res.json({data:{message:error}
        })
    })
};

productosController.updateOne = (req, res) => {
    productosDAO
      .updateOne(req.params.producto_id, req.body)
      .then((response) => {
        /*res.json({
          data: {
            message: "productos updated successfully",
            productos: response,
          },
        });*/
        res.redirect('/api/productos/getAll');
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };
  
  productosController.deleteOne = (req, res) => {
    productosDAO
      .deleteOne(req.params.producto_id)
      .then((response) => {
      /*  res.json({
          data: {
            message: "producto deleted successfully",
            productos: response,
          },
        });*/
        res.redirect('/api/productos/getAll');
      })
      .catch((error) => {
        data: {
          message: error;
        }
      });
  };



export default productosController;