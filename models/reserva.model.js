const mongoose=require('mongoose');
const {Schema}=mongoose;

const reservaSchema=new Schema({
    DPI:{type:String},
    fecha_llegada:{type:String},
    fecha_salida:{type:String},
    fecha_reserva:{type:String},
    estado:{type:String},
    no_tarjeta:{type:Number},
    mes_vencimiento:{type:Number},
    anio_vencimiento:{type:Number},
    cvc:{type:String},
    tipo_habitacion:{type:String},
    no_habitaciones:{type:Number},
    total:{type:Number}
})

module.exports=mongoose.model('reserva',reservaSchema);