const paqueteController=require('../controllers/paquete.controller');
const router= require('express').Router();

//Habitaciones.
router.get('/',paqueteController.verlistado);

router.post('/',paqueteController.crearPaquete);

router.put('/actualizar/:id',paqueteController.modificarPaquetes);

module.exports=router;