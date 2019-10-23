const mongoose=require('mongoose');
const URI='mongodb://localhost/habitaciones';

mongoose.connect(URI)
.then(db=>console.log('Conexion establecida'))
.catch(err=>console.error(err));

mongoose.set('useFindAndModify', false);

module.exports=mongoose;