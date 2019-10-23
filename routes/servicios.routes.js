const servicioController=require('../controllers/servicios.controller');
const router= require('express').Router();

//Habitaciones.
router.get('/',servicioController.verlistado);

router.post('/',servicioController.crearServicio);

router.put('/actualizar/:id',servicioController.modificarServicio);

module.exports=router;