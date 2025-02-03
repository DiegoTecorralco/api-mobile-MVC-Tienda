import app from './app.js';
import mongoose from './database.js';

app.listen(app.get('port'), ()=> console.log('app listening on port 3000')); //hacemos que la escuche la app y a travez del puerto 3000