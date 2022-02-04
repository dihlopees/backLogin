const {Router} = require("express");
const {criar, listar, remover, buscarPorId, atualizar} = require("../controller/produtos");
const router = Router();

//get devolve uma lista ou objetos
//router serve para criar rotas http
//utilizar get para mostrar os produtos no front, ele retorna uma lista de produtos
// peço algo pelo get e ele me devolve {} [] ...
router.get("/:id?", async (req, res) => {
    try {

        const{id} = req.params;
        let resposta;

        if (id){
            resposta= await buscarPorId(id);
        }else {
            resposta = await listar();
        }

        res.send(resposta);

    } catch (erro) {
        console.log(erro);
        res.status(500).send({erro});
    }
});

//criar um obejto, se cria um novo recurso usamos POST

router.post("/", async (req, res) => {
   try {
       const {nome, marca, valor, imagem, data , corId} = req.body;

       const produtoCriado = await criar(nome, marca, valor, imagem, data, corId);

       res.send(produtoCriado);
   } catch (erro) {
       console.log(erro)
       res.status(500).send({erro});
   }
});

//ATUALIZAR O RECURSO EXISTENTE
router.put("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let dados = req.body;

        await atualizar(id, dados);
        const resultado = await buscarPorId(id);

        res.send(resultado);
    }catch (erro) {
        console.log(erro);
        res.status(500).send({erro});
    }
});

//await atualizar(nome, marca, valor,corId, imagem, data)

//deletar 
router.delete("/:id", async (req, res) => {
    try {
        await remover(req.params.id);

        res.send();
    }catch (erro) {
        console.log(erro);
        res.status(500).send({erro});
    }
    
    
});


module.exports = router;