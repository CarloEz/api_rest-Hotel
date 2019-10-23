const ctrl={};

ctrl.registro=(req,res)=>{
    res.json('empleado creado');
}

ctrl.login=(req,res)=>{
    res.json('empleado verificado');
}


module.exports=ctrl;