const servicioController=require('../controllers/servicios.controller');
const router= require('express').Router();

//LISTADO DE SERVICIOS POR RESERVA.
router.get('/:reserva',servicioController.verlistado);

//CREAR EL SERVICIO PARA EL CLIENTE CON EL COD DE RESERVA.
router.post('/',servicioController.crearServicio);

module.exports=router;