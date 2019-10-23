const Controller=require('../controllers/cliente.controller');
const router= require('express').Router();

//Habitaciones.
router.post('/',Controller.registro);

router.post('/login/',Controller.login);

module.exports=router;