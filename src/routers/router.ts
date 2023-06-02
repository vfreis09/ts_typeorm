import { Router } from "express";
import carController from '../controllers/controller'

const router = Router();

router.get('/', carController.getCars);
router.post('/add', carController.postCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;