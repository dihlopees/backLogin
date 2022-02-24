const { Sequelize, DataTypes } = require("sequelize");
let initProdutos = require("./produtos");
let initCor = require("./cor");
let initUsuario = require("./usuario");

//informações de credencial e senha para conectar com o bando de dados
const options = {
  username: "postgres",
  password: "ingrid1",
  host: "localhost", // se tivesse rodando um banco seria uma url
  dialect: "postgres",
  database: "projeto",
};

const sequelize = new Sequelize(options);
sequelize
  .authenticate()
  .then(() => {
    console.log("conectado ao banco de dados");
  })
  .catch((erro) => {
    console.log(erro);
  });

const Produtos = initProdutos(sequelize, DataTypes);
const Cor = initCor(sequelize, DataTypes);
const Usuario = initUsuario(sequelize, Sequelize);

Produtos.belongsTo(Cor, { as: "cor", foreignKey: "corid" });

module.exports = { sequelize, Sequelize, Produtos, Cor, Usuario };
