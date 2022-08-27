import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://himal:1234@cluster0.7wdadb1.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.log('Connection Error :' + e.message);
  });

const db = mongoose.connection;

export default db;
