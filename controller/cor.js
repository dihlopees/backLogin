const {Cor} = require("../bd");

let controller = {};

controller.listar = async() => {
    try {
        return await Cor.findAll();

    } catch(erro) {
        throw erro;
    }
};

module.exports = controller;