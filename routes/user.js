import express from 'express';
import { getAllCustomer } from '../controller/user.js';
const route = express.Router();

route.get('/', getAllCustomer);

export default route;
