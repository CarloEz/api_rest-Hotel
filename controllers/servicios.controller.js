const ctrl={};

ctrl.crearServicio=(req,res)=>{
    res.json('servicio creada');
}

ctrl.verlistado=(req,res)=>{
    res.json('lista de servicios');
}

ctrl.modificarServicio=(req,res)=>{
    res.json('precio servicio modificada');
}

module.exports=ctrl;