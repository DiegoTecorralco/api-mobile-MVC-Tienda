import mongoose from 'mongoose'; //importamos mongoose
mongoose.connect('mongodb+srv://DiegoTecorralco:Darkfendem112!@clusterteco.rwznw.mongodb.net/Tieda?retryWrites=true&w=majority&appName=ClusterTeco') //conectamos el cluster de MongoDB atlas a la api
.then((db)=> console.log('MongoDB atlas connected succesful'))
.catch((error=>console.log(error))); //promesas
export default mongoose;