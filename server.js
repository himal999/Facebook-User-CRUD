import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
const app = express();
import db from './mongoose/connection.js';
const PORT = 5000;

db.on('error', console.error.bind(console, 'DB CONNECTION ERROR...'));
db.on('open', () => {
  console.log('DB CONNECTED...');
});

app.use(bodyParser.json());
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log('SERVER RUNNING...');
});
