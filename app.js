const express =require("express");
const cors=require('cors');
const { mongoose } = require('./database'); //Conexion a la base de datos MongoDB
const app=express();

//Settings:
app.set('port',process.env.PORT||3000);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(cors());

app.use('/habitacion',require('./routes/habitacion.routes'));
app.use('/servicio',require('./routes/servicios.routes'));
app.use('/paquete',require('./routes/paquete.routes'));
app.use('/reserva',require('./routes/reserva.routes'));
app.use('/cliente',require('./routes/cliente.routes'));
app.use('/empleado',require('./routes/empleado.routes'));



app.listen(app.get('port'),()=>{
console.log('Server');
})
