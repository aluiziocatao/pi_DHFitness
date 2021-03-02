module.exports = (Sequelize, DataType) => {

    const Teacher = Sequelize.define('Teacher', {
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
          specialty: {
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
        tableName: "teachers"
    });
    return Teacher;
}