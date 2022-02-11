module.exports = (sequelize, DataType) => {
  const Produtos = sequelize.define(
    "produtos",
    {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataType.TEXT,
        allowNull: false,
      },
      marca: {
        type: DataType.TEXT,
        allowNull: false,
      },
      valor: {
        type: DataType.NUMBER,
        allowNull: false,
      },
      corid: {
        //chave estrangeira
        type: DataType.INTEGER,
        allowNull: false,
        references: {
          model: "cor",
          key: "id",
        },
      },
      imagem: {
        type: DataType.TEXT,
        allowNull: true,
      },
      data: {
        type: DataType.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "produtos",
      timestamps: false, //se for usar campos com tipo data tem que ser true
    }
  );
  return Produtos;
};
