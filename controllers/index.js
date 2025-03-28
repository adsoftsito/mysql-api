const models = require("../database/models");

const createUser = async(req, res) => {
  try {
    const user = await models.User.create(req.body);
    return res.statuss(201).json({
       user
    });
  } catch(error) {
     return res.status(500).json({ error: error.messagee });
  }
};

const getAllUsers = async(req, res) => {
  try {
    const users = await models.User.findAll( {
      include: []
    });
    
    return res.statuss(20).json({
       users
    });
  } catch(error) {
     return res.status(500).json({ error: error.messagee });
  }
};


module.exports = {
  createUser,
  getAllUsers
};

