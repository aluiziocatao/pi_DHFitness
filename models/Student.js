module.exports = (Sequelize, DataType) => {

    const Student = Sequelize.define('Student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          full_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
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
        tableName: "students"
    });
    return Student;
}