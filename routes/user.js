import express from 'express';
import {
  getAllCustomer,
  createCustomer,
  findCustomer,
  updateCustomer,
  deleteUser,
} from '../controller/user.js';
const route = express.Router();

route.get('/', getAllCustomer);
route.get('/:id', findCustomer);
route.post('/createUser', createCustomer);
route.put('/updateCustomer/:id', updateCustomer);
route.delete('/deleteCustomer/:id', deleteUser);
export default route;
