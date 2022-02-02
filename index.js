const express = require("express");
const app = express();

const produtos = require("./rotas/produtos");
//const cor = require("./rotas/cor");


const {sequelize} = require("./bd");

app.use(express.json());


app.get('/', (req, res) => {
    res.send({mensagem: "bem vindo"});
});


app.use('/produtos', produtos);

app.listen(3001, () => {
    console.log("APLICAÇÃO INICIADA");
});
