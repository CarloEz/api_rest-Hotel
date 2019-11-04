const Controller=require('../controllers/cliente.controller');
const router= require('express').Router();

//CREACION DE UN NUEVO CLIENTE
router.post('/',Controller.registro);

//VERIFICA LOS DATOS PARA LOGIN
router.post('/login/',Controller.login);

module.exports=router;