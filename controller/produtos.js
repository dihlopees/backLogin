const {Produtos} = require("../bd");

let controller = {};

controller.criar = async (nome, marca, valor, data, imagem, corid) => { //nao esquecer de por imagem dnv
    try {
        return await Produtos.create({
            nome,
            marca,
            valor,
            imagem,
            data,
            corid,

        });
    }catch (erro) {
        throw erro;
    }
};

controller.buscarPorId = async (id) =>{
    try {
        return await Produtos.findByPk(id,
              { include:
            {
                association:"cor" , atribute:[ "nome" ]}
        });
        
    }catch (erro) {
        throw erro;
    };
};

controller.atualizar = async (id, {nome, marca, valor, corid, imagem, data}) => {
    try {
        return await Produtos.update(
            {
                nome,
                marca,
                valor,
                corid,
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
        return await Produtos.findAll(
            { include:
            {
                association:"cor" , atribute:[ "nome" ]}
        });
            
        

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
