const {Produtos} = require("../bd");

let controller = {};

controller.criar = async (nome, marca, valor, imagem, data, corId) => {
    try {
        return await Produtos.create({
            nome,
            marca,
            valor,
            imagem,
            data,
            corId,

        });
    }catch (erro) {
        throw erro;
    }
};

controller.listar = async() => {
    try {
        return await Produtos.findAll();

    } catch(erro) {
        throw erro;
    }
};


module.exports = controller;
