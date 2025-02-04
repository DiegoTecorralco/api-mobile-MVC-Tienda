//aquí van a ir todas las rutas de producto

import { Router } from 'express';
import productosController from '../controller/productos.controller.js';

const productosRouter= Router(); 

productosRouter.get('/getAll',productosController.getAll);
productosRouter.get('/getOne/:producto_id',productosController.getOne);
productosRouter.post('/insert',productosController.insert);
productosRouter.post('/updateOne/:producto_id',productosController.updateOne);
productosRouter.get('/deleteOne/:producto_id',productosController.deleteOne);

export default productosRouter; 