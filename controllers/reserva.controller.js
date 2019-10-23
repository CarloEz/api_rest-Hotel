const ctrl={};

ctrl.crearReserva=(req,res)=>{
    res.json('reserva creada');
}

ctrl.verlistado=(req,res)=>{
    res.json('listado de reserva con sus detalles');
}

ctrl.verReserva=(req,res)=>{
    res.json('buscar por fecha y cliente');
}

module.exports=ctrl;