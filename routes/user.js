import express from 'express';
import {
  getAllCustomer,
  createCustomer,
  findCustomer,
  updateCustomer,
} from '../controller/user.js';
const route = express.Router();

route.get('/', getAllCustomer);
route.get('/:id', findCustomer);
route.post('/createUser', createCustomer);
route.put('/updateCustomer/:id', updateCustomer);

export default route;
