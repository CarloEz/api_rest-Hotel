const ctrl={};

ctrl.crearPaquete=(req,res)=>{
    res.json('Paquete creada');
}

ctrl.verlistado=(req,res)=>{
    res.json('listado de paquetes');
}

ctrl.modificarPaquetes=(req,res)=>{
    res.json('paquete modificado');
}

module.exports=ctrl;