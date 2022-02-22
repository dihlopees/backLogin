const {saltos} = require('../config.json');
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "usuario",
    {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataType.STRING(30),
        allowNull: false,
      },
      senha: {
        type: DataType.STRING(200),
        allowNull: false,
      },
    },
    {
      tableName: "usuario",
      timestamps: false, 
      hooks: {
        beforeValidate: (usuario) => {
          if (usuario.senha) usuario.senha = bcrypt.hashSync(usuario.senha, saltos);
        }
      }
    }
  );
  return Usuario;
};
