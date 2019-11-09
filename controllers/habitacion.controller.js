const ctrl = {};
const model = require('../models/habitacion.model');

ctrl.crearHabitacion = async (req, res) => {
    const body = {
        no_habitacion: req.body.no_habitacion,
        estado: req.body.estado,
        tipo: req.body.tipo,
        costo: req.body.costo
    }

    const Existente = await model.findOne({ no_habitacion: body.no_habitacion });

    if (Existente) {
        res.json('No se puede ingresar, habitacion existente');
    } else {
        const habitacion = new model(body);
        await habitacion.save();
        res.json('habitacion ingresada');
    }
}

ctrl.verListado = async (req, res) => {
    const listado = await model.find({ estado: "disponible" });
    res.json(listado);
}

ctrl.noDisponible = async (req, res) => {
    const listado = await model.find({ estado: "ocupada" });
    res.json(listado);
}


//Este modificar habitacion query de habitaciones ocupadas para poderlas poner en disponibles.
ctrl.modificarHabitacion = async (req, res) => {
    //consulta a la base de datos para ver todas las habitaciones disponibles.
    //con un for de i =0 con el conteo de cuantas habitaciones dejaron de usarse por el cliente modificar el estado de la habitacion.
    const listado = await model.find({ estado: "ocupada" });
    const numero = req.body.no_habitaciones;
    console.log(listado);
    if (listado.length>0) {
        if(listado.length==numero){
            for (let i = 0; i < numero; i++) {
                let habitacion = {
                    no_habitacion: listado[i].no_habitacion,
                    estado: "disponible",
                    tipo: listado[i].tipo,
                    costo: listado[i].costo
                }
                await model.findByIdAndUpdate(listado[i]._id, { $set: habitacion }, { new: true });
            }
            res.json('Estado de habitaciones: disponibles');
        }else{
            res.json('Numero excedido de habitaciones');
        }
    } else {
        res.json('Escoja habitaciones ocupadas');
    }
}

module.exports = ctrl;
