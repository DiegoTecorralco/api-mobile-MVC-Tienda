//aqui va a ir el modelo
import { model, Schema, version } from 'mongoose';

const productosSchema = new Schema({
    producto_id: {
        unique: true,
        required: true,
        type: Number
    },
    nombre: {type: String,required: true},
    stock: {type: Number,required: true},
    precio: {type: Number,required: true}
    },{
        versionKey: false,
        timestamps: true
});

export default model('producto', productosSchema);