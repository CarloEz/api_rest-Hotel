const mongoose=require('mongoose'),

const {Schema}=mongoose;

const clienteSchema=new Schema({
    nombre:{type:String},
    apellido:{type:String},
    email:{type:String},
    DPI:{type:String},
    password:{type:String}
})

module.exports=mongoose.model('cliente',clienteSchema);