const mongoose=require('mongoose');
const {Schema}=mongoose;

const habitacionSchema=new Schema({
    no_habitacion:{type:Number},
    estado:{type:String},
    tipo:{type:String},
    costo:{type:Number}
})

module.exports=mongoose.model('habitacione',habitacionSchema);