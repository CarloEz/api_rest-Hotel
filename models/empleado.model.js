const mongoose=require('mongoose'),

const {Schema}=mongoose;

const empleadoSchema=new Schema({
    nombre:{type:String},
    apellido:{type:String},
    email:{type:String},
    DPI:{type:String},
    rol:{type:String},
    password:{type:String}
})

module.exports=mongoose.model('empleado',empleadoSchema);