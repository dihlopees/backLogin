const {Router} = require("express");
const { listar} = require("../controller/usuario");
const router = Router();

router.get("/", async (req, res) => {
    try {
        let dados = req.body;

       const usuario =  await listar(dados);

        res.send(usuario);

    } catch (erro) {
        console.log(erro);
        res.status(500).send({erro});
    }
});

module.exports = router;