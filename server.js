import express from 'express';
import userRoutes from './routes/user.js';
const app = express();

const PORT = 5000;

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log('SERVER RUNNING...');
});
