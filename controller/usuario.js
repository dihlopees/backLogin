const jwt = require("jsonwebtoken");
const { Usuario } = require("../bd");
const { palavraChave } = require("../config.json");
const bcrypt = require("bcrypt");

let controller = {};

controller.buscarPorEmail = async (email) => {
  try {
    return await Usuario.findOne({
      where: {
        email,
      },
    });
  } catch (erro) {
    throw erro;
  }
};

controller.login = async (email, senha) => {
  try {
    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) return false;

    return jwt.sign({ id: usuario.id }, palavraChave, {
      expiresIn: "3h",
    });
  } catch (erro) {
    throw erro;
  }
};

controller.criar = async (email, senha) => {
  try {
    return await Usuario.create({
      email,
      senha,
    });
  } catch (erro) {
    throw erro;
  }
};

controller.atualizar = async (id, { email, senha }) => {
  try {
    return await Usuario.update(
      {
        email,
        senha,
      },
      {
        where: {
          id,
        },
      }
    );
  } catch (erro) {
    throw erro;
  }
};

module.exports = controller;
