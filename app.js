const express =require("express");
const cors=require('cors');
const { mongoose } = require('./database'); //Conexion a la base de datos MongoDB
const app=express();

//Settings:
app.set('port',process.env.PORT||3000);


// Middlewares
app.use(express.json());  //Envio y recepcion de datos en JSON.
app.use(express.urlencoded({
  extended: true
}));


//PERMISOS PARA EL CLIENTE QUE ENVIA SUS PETICIONES.
app.use(cors());

//ROUTES
app.use('/habitacion',require('./routes/habitacion.routes'));
app.use('/servicio',require('./routes/servicios.routes'));
app.use('/reserva',require('./routes/reserva.routes'));
app.use('/cliente',require('./routes/cliente.routes'));
app.use('/empleado',require('./routes/empleado.routes'));



//SERVIDOR ESCUCHANDO:
app.listen(app.get('port'),()=>{
console.log('Server');
})
