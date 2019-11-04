const habitacionController=require('../controllers/habitacion.controller');
const router= require('express').Router();

//VER LISTADO DE HABITACIONES DISPONIBLES.
router.get('/',habitacionController.verListado);

//CREAR UNA HABITACION
router.post('/',habitacionController.crearHabitacion);

//ACTUALIZAR ESTADO DE HABITACIONES.
router.put('/actualizar',habitacionController.modificarHabitacion);

//VER LISTADO DE HABITACIONES NO DISPONIBLES 
router.get('/ocupada',habitacionController.noDisponible);

module.exports=router;