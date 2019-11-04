const mongoose=require('mongoose');
//const URI='mongodb+srv://admin:admin@cluster0-rvkzp.mongodb.net/reserva?retryWrites=true&w=majority';

const URI='mongodb://localhost/reserva';

mongoose.connect(URI)
.then(db=>console.log('Conexion establecida'))
.catch(err=>console.error(err));

mongoose.set('useFindAndModify', false);

module.exports=mongoose;