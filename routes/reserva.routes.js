const reservaController=require('../controllers/reserva.controller');
const router= require('express').Router();

//VER LISTADO DE RESERVAS.
router.get('/',reservaController.verlistado);

//CREAR RESERVA
router.post('/',reservaController.crearReserva);

//VER LISTADO DE RESERVAS POR CLIENTE
router.get('/dpi/:id',reservaController.verReservasCliente);

//CALCULAR EL RANGO DE DIAS DE LA RESERVA
router.post('/calcular/',reservaController.calcular_dias);


//MODIFICAR ESTADO DE LA RESERVA CON EL ID DE RESERVA.
router.put('/estado/:id',reservaController.modificarEstadoReserva);

module.exports=router;