const ctrl = {};
const model = require('../models/cliente.model');

ctrl.registro = async (req, res) => {
    console.log(req.body);

    const body = {
        DPI: req.body.DPI,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        codigo: req.body.codigo,
        fecha_nacimiento:req.body.fecha_nacimiento
    }

    //Hago una busqueda para ver si el correo esta en uso:
    const usuarioExistente = await model.findOne({ correo: body.correo });

    if (usuarioExistente) {
        res.json('El correo esta en uso');
    } else {
        const usuario = new model(body);
        await usuario.save();
        res.json('Usuario Ingresado');
    }
}

ctrl.login = async(req, res) => {
    const usuario = await model.findOne({ correo: req.body.correo, codigo: req.body.codigo });
    
    if (usuario) {
        res.json({usuario:usuario._id,DPI:usuario.DPI});
    } else {
        res.json('verifica tus datos');
    }
}


module.exports = ctrl;