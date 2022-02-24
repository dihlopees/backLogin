const { Router } = require("express");
const path = require("path");
const {
  criar,
  listar,
  remover,
  buscarPorId,
  atualizar,
} = require("../controller/produtos");
const router = Router();

router.get("/:id?", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req);
    let resposta;

    if (id) {
      resposta = await buscarPorId(id);
    } else {
      resposta = await listar();
    }

    res.send(resposta);
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nome, marca, valor, imagem, data, corid } = req.body;
    const produtoCriado = await criar(nome, marca, valor, imagem, data, corid);

    res.send(produtoCriado);
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let dados = req.body;

    await atualizar(id, dados);
    const resultado = await buscarPorId(id);

    res.send(resultado);
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await remover(req.params.id);

    res.send();
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

router.post("/upload", async (req, res) => {
  try {
    const { arquivo } = req.files;

    let diretorio = path.join(__dirname, "../public");

    let nomeArquivo = arquivo.md5;
    let extensao = arquivo.mimetype.split("/")[1];

    arquivo.mv(`${diretorio}/${nomeArquivo}.${extensao}`, (erro) => {
      if (erro) {
        throw erro;
      }

      res.json({
        arquivo: `public/${nomeArquivo}.${extensao}`,
        nomeArquivo: arquivo.name,
      });
    });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

module.exports = router;
