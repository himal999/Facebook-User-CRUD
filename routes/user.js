import express from 'express';
import {
  getAllCustomer,
  createCustomer,
  findCustomer,
} from '../controller/user.js';
const route = express.Router();

route.get('/', getAllCustomer);
route.get('/:id', findCustomer);
route.post('/createUser', createCustomer);

export default route;
