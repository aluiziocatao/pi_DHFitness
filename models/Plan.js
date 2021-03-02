module.exports = (Sequelize, DataType) => {

    const Plan = Sequelize.define('Plan', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false
          },
          price: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updateAt: {
            type: Sequelize.DATE
          }
        },
    {
        tableName: "plans"
    });
    return Plan;
}