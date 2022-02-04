const express = require("express");
const app = express();
var cors = require("cors");

const produtos = require("./rotas/produtos");
const cor = require("./rotas/cor");


const {sequelize} = require("./bd");

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send({mensagem: "bem vindo"});
});


app.use('/produtos', produtos);
app.use('/cor', cor);


app.options("/", cors());

app.listen(3001, () => {
    console.log("APLICAÇÃO INICIADA");
});
