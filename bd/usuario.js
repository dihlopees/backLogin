module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "usuario",
    {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataType.STRING(30),
        allowNull: false,
      },
      senha: {
        type: DataType.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "usuario",
      timestamps: false, 
    }
  );
  return Usuario;
};
