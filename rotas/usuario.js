const {Router} = require("express");
const { login, criar, buscarPorEmail} = require("../controller/usuario");
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

router.post("/criar", async (req, res) => {
    try {
      const { email, senha } = req.body;
  
      const usuarioCriado = await criar( email, senha);
  
      res.send(usuarioCriado);
    } catch (erro) {
      res.status(500).send({ erro });
    }
  });


  router.post("/esqueci", async (req, res)=> {
    try {
        const {email} = req.body;

        const usuario = await buscarPorEmail(email);
        

        if (usuario.id) {


        }

        
        console.log(usuario);

        res.send({email});


    }catch (erro) {
        res.status(500).send({erro})
        console.log(erro);
    }
  });



module.exports = router;