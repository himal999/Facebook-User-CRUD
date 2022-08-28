import express from 'express';
import { getAllCustomer, createCustomer } from '../controller/user.js';
const route = express.Router();

route.get('/', getAllCustomer);
route.post('/createUser', createCustomer);

export default route;
