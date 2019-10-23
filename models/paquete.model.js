const mongoose=require('mongoose'),

const {Schema}=mongoose;

const paqueteSchema=new Schema({
    nombre:{type:String},
    caracteristicas:{type:String},
    costo:{type:Number}
})

module.exports=mongoose.model('paquete',paqueteSchema);