const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
var cors = require("cors");

const produtos = require("./rotas/produtos");
const cor = require("./rotas/cor");


const {sequelize} = require("./bd");
app.use("/public" , express.static('public'));
app.use(express.json());
app.use(cors());
app.use(fileupload());

app.get('/', (req, res) => {
    res.send({mensagem: "bem vindo"});
});


app.use('/produtos', produtos);
app.use('/cor', cor);


app.options("/", cors());

app.listen(3001, () => {
    console.log("APLICAÇÃO INICIADA");
});
