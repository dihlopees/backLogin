const jwt = require("jsonwebtoken");
const { palavraChave } = require("../config.json");

const tokenVerify = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ erro: "Token não informado" });
  }

  // aqui fazemos a validação do token
  jwt.verify(token, palavraChave, (erro, decoded) => {
    if (erro) return res.status(500).send({ erro });

    const { id } = decoded; // esse id aqui é extraido do token e eu posso usa-lo para filtrar itens criados ou etc do ususario que esta logado

    req.usuarioId = id;

    next();
  });
};

module.exports = tokenVerify;
