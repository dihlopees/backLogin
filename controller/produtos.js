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

controller.buscarPorId = async (id) =>{
    try {
        return await Produtos.findByPk(id);
    }catch (erro) {
        throw erro;
    };
};

controller.atualizar = async (id, {nome, marca, valor,corId, imagem, data}) => {
    try {
        return await Produtos.update(
            {
                nome,
                marca,
                valor,
                corId,
                imagem,
                data,
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

controller.listar = async() => {
    try {
        return await Produtos.findAll();

    } catch(erro) {
        throw erro;
    }
};

controller.remover = async(id) => {
    try {
        return await Produtos.destroy({
            where: {
                id,
            }
        });
    } catch (erro) {
        throw erro;
    }
};


module.exports = controller;
