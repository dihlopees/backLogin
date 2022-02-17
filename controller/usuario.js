const jwt = require("jsonwebtoken");
const { Usuario } = require("../bd");
const {palavraChave} = require("../config.json");

let controller = {};

// controller.listar = async ({email, senha}) => {
//   try {
//     return await Usuario.findOne({
//       where: {
//         email,
//         senha,
//       },
//     });
//   } catch (erro) {
//     throw erro;
//   }
// };

controller.login = async (email, senha) => {
  try {
    const usuario = await Usuario.findOne({
      where: {
        email,
      }
    });

    if (usuario.senha != senha) return false;

    return jwt.sign({ id:usuario.id}, palavraChave, {
      expiresIn: "3h",
    })

  }catch (erro) {
    throw erro;
  }
};

module.exports = controller;
