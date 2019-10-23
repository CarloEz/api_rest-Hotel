const ctrl={};

ctrl.crearHabitacion=(req,res)=>{
    res.json('habitacion creada');
}

ctrl.verlistado=(req,res)=>{
    res.json('lista de habitaciones disponibles');
}

ctrl.habitacionesreservadas=(req,res)=>{
    //consulta a la base de datos para ver todas las habitaciones disponibles.
    //con un for de i =1 con el conteo de cuantas habitaciones reservo el cliente modificar el estado de la habitacion.
}

ctrl.modificarHabitacion=(req,res)=>{
    //consulta a la base de datos para ver todas las habitaciones disponibles.
    //con un for de i =1 con el conteo de cuantas habitaciones dejaron de usarse por el cliente modificar el estado de la habitacion.
    res.json('estado de habitacion modificada');
}

module.exports=ctrl;
