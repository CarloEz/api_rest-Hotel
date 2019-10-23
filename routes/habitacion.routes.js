const habitacionController=require('../controllers/habitacion.controller');
const router= require('express').Router();

//Habitaciones.
router.get('/',habitacionController.verlistado);

router.post('/',habitacionController.crearHabitacion);

router.put('/actualizar/:id',habitacionController.modificarHabitacion);

module.exports=router;