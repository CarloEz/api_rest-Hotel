const mongoose=require('mongoose');

const {Schema}=mongoose;

const empleadoSchema=new Schema({
    DPI:{type:String},
    nombre:{type:String},
    apellido:{type:String},
    correo:{type:String},
    codigo:{type:String},
    rol:{type:String}
})

module.exports=mongoose.model('empleado',empleadoSchema);