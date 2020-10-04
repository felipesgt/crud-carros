import express from 'express';
import CarsController from './src/controllers/CarsControllers.js'

const routes = express.Router();

routes.get('/get', CarsController.index);
routes.post('/cars', CarsController.store);
routes.delete('/:nome', CarsController.delete);
routes.put('/', CarsController.update);

export default routes;