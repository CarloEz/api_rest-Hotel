const mongoose=require('mongoose');

const {Schema}=mongoose;

const clienteSchema=new Schema({
    DPI:{type:String},
    nombre:{type:String},
    apellido:{type:String},
    correo:{type:String},
    codigo:{type:String},
    fecha_nacimiento:{type:String}
})

module.exports=mongoose.model('cliente',clienteSchema);