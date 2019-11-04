const ctrl = {};
const model = require('../models/servicio.model');

ctrl.crearServicio = async (req, res) => {
    const body = {
        reserva:req.body.reserva,
        tipo: req.body.tipo,
        costo: req.body.costo
    }

    const servicio = new model(body);
    await servicio.save();
    res.json('servicio asignado al cliente');
}

ctrl.verlistado = async (req, res) => {
    const listado = await model.find({ reserva: req.params.reserva })
    res.json(listado);
}

module.exports = ctrl;