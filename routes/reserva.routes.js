const reservaController=require('../controllers/reserva.controller');
const router= require('express').Router();

//Habitaciones.
router.get('/',reservaController.verlistado);

router.post('/',reservaController.crearReserva);

router.post('/buscar/',reservaController.verReserva);

module.exports=router;