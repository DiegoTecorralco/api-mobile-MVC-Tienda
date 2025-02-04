//aqui va a ir todo lo de la base de datos 
import producto from '../models/producto.js';
const productosDAO = {};

productosDAO.getAll=async()=>{
    return await producto.find();
};

productosDAO.getOne=async(producto_id)=>{
    return await producto.findOne({producto_id:producto_id}); //   
}
productosDAO.insert=async(producto)=>{
    return await producto.create(producto); //   
}
productosDAO.updateOne = async (producto_id, Student) => {
    return await producto.findOneAndUpdate({ producto_id: producto_id }, producto);
  };
  productosDAO.deleteOne = async (producto_id) => {
    return await producto.findOneAndDelete({ producto_id: student_id });
  };
export default productosDAO;