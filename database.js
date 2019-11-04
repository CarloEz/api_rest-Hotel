const mongoose=require('mongoose');

//conexion a la nube.
const URI='mongodb+srv://admin:QxAJg6DqLgDUCiTE@cluster0-rvkzp.mongodb.net/reserva?retryWrites=true&w=majority';
//const URI='mongodb://localhost/reserva';


//opciones:
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(URI)
.then(db=>console.log('Conexion establecida'))
.catch(err=>console.error(err));

module.exports=mongoose;