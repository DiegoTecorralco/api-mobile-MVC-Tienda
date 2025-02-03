import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';

const app= express();

//setings
app.set('port',process.env.PORT||3000);  //configuramos el puerto
app.set('view engine', ejs); //configuramos el motor de vistas
 
//Middlewares
app.use(express.json()); //middleware para que entieda json
app.use(express.urlencoded({extended:true})); //configuramos para que entienda formularios html
app.use(morgan('dev')); //para que llevemos la bitacora de de las peticiones que llegan al servidor

export default app;