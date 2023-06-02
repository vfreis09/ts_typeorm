import { Request, Response} from 'express';
import AppDataSource from '../config/db';
import Car from '../entities/car';

const carRepository = AppDataSource.getRepository(Car);

//Get all cars / Home Page
const getCars = (req: Request, res: Response) => {
  carRepository.find()
    .then(car => res.send(car))
    .catch(err => console.log(err));
};

//Add new car
const postCar = (req: Request, res: Response) => {
  const car = new Car();
  car.maker = req.body.carMaker;
  car.model = req.body.carModel;
  car.year_prod = req.body.carYear;
  AppDataSource.manager.save(car)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err)); 
};

//Update a car by id
const updateCar = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const carUpdate = await carRepository.findOneBy({
    id: id,
  });

  if(carUpdate) {
    carUpdate.maker = req.body.carMaker;
    carUpdate.model = req.body.carModel;
    carUpdate.year_prod = req.body.carYear;

    carRepository.save(carUpdate)
    .then(car => res.redirect('/'))
    .catch(err => console.log(err)); 
  }
};

//Delete Car
const deleteCar = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  
  const carToRemove = await carRepository.findOneBy({
    id: id,
  });
  
  if(carToRemove) {
    carRepository.remove(carToRemove)
    .then(car => res.redirect('/'))
    .catch(err => console.log(err));
  }
};

const carController = {
  getCars,
  postCar,
  updateCar,
  deleteCar
};

export default carController;