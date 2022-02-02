const {Router} = require("express");
const {criar, listar} = require("../controller/produtos");
const router = Router();

//get devolve uma lista ou objetos
//router serve para criar rotas http
//utilizar get para mostrar os produtos no front, ele retorna uma lista de produtos
// peço algo pelo get e ele me devolve {} [] ...
router.get("/", async (req, res) => {
    try {
        const produtos = await listar();
        res.send(produtos)

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
router.put("/:id", (req, res) => {
    let id = req.params.id;
    res.send("rota para atualizar recursos existsnte" + id);
});

//deletar 
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    res.send("rota para deletar recursos" + id);
})
module.exports = router;