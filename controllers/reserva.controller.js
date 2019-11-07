const ctrl = {};
const model = require('../models/reserva.model');
const modelH = require('../models/habitacion.model');
const moment = require('moment');

ctrl.calcular_dias = async (req, res) => {
    //Tengo que ver el rango de dias entre las fechas ingreso y salida
    var x = moment(req.body.fecha_llegada, "YYYY-MM-DD");
    var y = moment(req.body.fecha_salida, "YYYY-MM-DD");
    var duracion = moment.duration(y.diff(x)).asDays();

    if(duracion<0){
        res.json("Fecha incorrecta");
    }else{
        res.json(duracion);
    }
}



//Creacion de la reserva:
ctrl.crearReserva = async (req, res) => {

    const bodyReserva = {
        DPI: req.body.DPI,
        fecha_llegada: req.body.fecha_llegada,
        fecha_salida: req.body.fecha_salida,
        fecha_reserva: req.body.fecha_reserva,
        estado: req.body.estado,
        no_tarjeta: req.body.no_tarjeta,
        mes_vencimiento: req.body.mes_vencimiento,
        anio_vencimiento: req.body.anio_vencimiento,
        cvc: req.body.cvc,
        no_habitaciones : req.body.no_habitaciones,
        tipo_habitacion : req.body.tipo,
        total:req.body.total
    }

    const reserva = new model(bodyReserva);
    await reserva.save();

    modificarEstadoHabitaciones(bodyReserva.no_habitaciones,bodyReserva.tipo);
    res.json('reserva creada');
}


modificarEstadoHabitaciones = async (no_habitaciones, tipo_habitacion) => {
    const listado = await modelH.find({ estado: "disponible", tipo: tipo_habitacion });

    for (let i = 0; i < no_habitaciones; i++) {
        let habitacion={
            estado:"ocupada",
            tipo:listado[i].tipo,
            costo:listado[i].costo
        }
        await modelH.findByIdAndUpdate(listado[i]._id,{$set:habitacion},{new:true});
    }
    
}

ctrl.verlistado = async (req, res) => {
    const listado = await model.find()
    res.json(listado);
}


ctrl.verReservasCliente=async(req,res)=>{
    const listado=await model.find({DPI:req.params.id});
    res.json(listado);
}


ctrl.modificarEstadoReserva=async(req,res)=>{
    let actualiza={
        estado:req.body.estado
    }
    await model.findByIdAndUpdate(req.params.id,{$set:actualiza},{new:true});
    res.json('Verificacion terminada');
}

module.exports = ctrl;