const {Router} = require("express");
const { listar} = require("../controller/cor");
const router = Router();

router.get("/", async (req, res) => {
    try {

       const cor =  await listar();

        res.send(cor);

    } catch (erro) {
        console.log(erro);
        res.status(500).send({erro});
    }
});

module.exports = router;