import Scheme from '../mongoose/model/Schema.js';

const getAllCustomer = (req, res) => {
  Scheme.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'Faild',
      });
    });
};

const createCustomer = (req, res) => {
  const user = req.body;

  if (!user.firstName) {
    return res.status(400).send({
      message: 'Not Null First Name',
    });
  }
  if (!user.sureName) {
    return res.status(400).send({
      message: 'Not Null Sure Names',
    });
  }
  if (!user.gender) {
    return res.status(400).send({
      message: 'Not Null gender',
    });
  }
  if (!user.dob) {
    return res.status(400).send({
      message: 'Not Null dob',
    });
  }
  if (!user.password) {
    return res.status(400).send({
      message: 'Not Null password',
    });
  }
  if (!user.telNo) {
    return res.status(400).send({
      message: 'Not Null telNo',
    });
  }
  if (!user.email) {
    return res.status(400).send({
      message: 'Not Null email',
    });
  }

  const newUser = new Scheme({
    firstName: user.firstName || 'Un User',
    sureName: user.sureName || 'default',
    gender: user.gender,
    dob: user.dob,
    password: user.password,
    telNo: user.telNo,
    email: user.email,
  });

  newUser
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((erro) => {
      res.status(500).send({
        message: erro.message || 'User Create Faild',
      });
    });
};

export { getAllCustomer, createCustomer };
