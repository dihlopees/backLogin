const { Usuario } = require("../bd");

let controller = {};

controller.listar = async ({email, senha}) => {
  try {
    return await Usuario.findOne({
      where: {
        email,
        senha,
      },
    });
  } catch (erro) {
    throw erro;
  }
};


module.exports = controller;
