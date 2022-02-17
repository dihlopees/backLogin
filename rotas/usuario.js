const {Router} = require("express");
const { listar, login} = require("../controller/usuario");
const router = Router();

// router.post("/", async (req, res) => {
//     try {
//         let dados = req.body;

//        const usuario =  await listar(dados);

//         res.send(usuario);

//     } catch (erro) {
//         console.log(erro);
//         res.status(500).send({erro});
//     }
// });

router.post("/", async (req,res) => {
    try {
        const {email, senha} = req.body;
        const token = await login(email, senha);

        if(token) {
            res.send({token});
        }else {
            res.status(401).send({erro: "Login ou Senha Inválidos"});

        }

    }catch (erro) {
        console.log(erro);
        res.status(500).send({erro});
    }
});

module.exports = router;