module.exports = (sequelize, DataType) => {
    const Cor = sequelize.define("cor", {
        id: {
            type:DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type:DataType.TEXT,
            allowNull: false,
        }
    },
    {
        tableName:"cor",
        timestamps: false,
    }
    );
    return Cor;
}