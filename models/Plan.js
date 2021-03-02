module.exports = (Sequelize, DataType) => {

    const Plan = Sequelize.define('Plan', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: DataType.STRING,
            allowNull: false
          },
          price: {
            type: DataType.FLOAT,
            allowNull: false
          },
          createdAt: {
            type: DataType.DATE
          },
          updateAt: {
            type: DataType.DATE
          }
        },
    {
        tableName: "plans"
    });
    return Plan;
}