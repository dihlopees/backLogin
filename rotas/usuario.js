const { Router } = require("express");
const { login, criar, buscarPorEmail, atualizar } = require("../controller/usuario");
const router = Router();
const { send} = require("../controller/mail");

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

router.post("/", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const token = await login(email, senha);

    if (token) {
      res.send({ token });
    } else {
      res.status(401).send({ erro: "Login ou Senha Inválidos" });
    }
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

router.post("/criar", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuarioCriado = await criar(email, senha);

    res.send(usuarioCriado);
  } catch (erro) {
    res.status(500).send({ erro });
  }
});

router.post("/esqueci", async (req, res) => {
  try {
    const { email } = req.body;

    const usuario = await buscarPorEmail(email);

    if (usuario) {
      const novaSenha = (Math.random() + 1).toString(36).substring(7);

      console.log(novaSenha);

      await atualizar(usuario.id, { senha: novaSenha });

      const from = '"DESAFIO BOOTCAMP" <viptecapi@gmail.com>';
      const subject = "Recuperação de Senha Solicitada";
      const html = `
      <p>Olá ${email}, </p>

      <p>A gente gerou uma senha temporaria para você, agora é só logar novamente :) Senha:   <strong>${novaSenha}</strong></p>
      
      <p>Viptech Desenvolvimento de Sistemas</p>`;

      await send(from, email, subject, html);
      res.send({ sucesso: `A senha foi enviada para o email ${email}` });
    
  }

    // res.status(400).send({ erro: "Email informado invalido" });
  } catch (erro) {
    res.status(500).send({ erro });
    console.log(erro);
  }
});

module.exports = router;
