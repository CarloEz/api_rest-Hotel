const Controller=require('../controllers/empleado.controller');
const router= require('express').Router();

//CREACION DE UN EMPLEADO 
router.post('/',Controller.registro);

//VERIFICACION DE LOS DATOS PARA LOGIN
router.post('/login/',Controller.login);

router.get('/empleados/',Controller.empleados);

module.exports=router;