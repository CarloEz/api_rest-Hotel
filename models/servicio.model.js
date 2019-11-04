const mongoose=require('mongoose');
const {Schema}=mongoose;

const servicioSchema=new Schema({
    reserva:{type:String},
    tipo:{type:String},
    costo:{type:Number}
})

module.exports=mongoose.model('servicio',servicioSchema);