const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
var cors = require("cors");

const { sequelize } = require("./bd");
const produtos = require("./rotas/produtos");
const cor = require("./rotas/cor");
const usuario = require("./rotas/usuario");
const tokenVerify = require("./middleware/tokenVerify");

app.options("/", cors());

app.use("/public", express.static("public"));
app.use(express.json());
app.use(cors());
app.use(fileupload());

app.get("/", (req, res) => {
  res.send({ mensagem: "bem vindo" });
});

app.use("/usuario", usuario);
app.use(tokenVerify);
app.use("/produtos", produtos);
app.use("/cor", cor);

// const { send } = require("./controller/mail");

// send(
//   "viptecapi@gmail.com",
//   "ingridrieser.lopes@gmail.com",
//   "teste de email",
//   "<h1> meu email funcionou</h1>"
// );

app.listen(3001, () => {
  console.log("APLICAÇÃO INICIADA");
});
