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
const findCustomer = (req, res) => {
  const body = req.params;
  const id = body.id;

  Scheme.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Not Found Customer',
        });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Can't find customer",
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

const updateCustomer = (req, res) => {
  const id = req.params.id;
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
  Scheme.findByIdAndUpdate(id, {
    firstName: user.firstName,
    sureName: user.sureName,
    gender: user.gender,
    dob: user.dob,
    password: user.password,
    telNo: user.telNo,
    email: user.email,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Can't Find or update customer",
        });
      }
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Not Found',
      });
    });
};

export { getAllCustomer, createCustomer, findCustomer, updateCustomer };
