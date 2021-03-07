module.exports = (Sequelize, DataType) => {

    const Student = Sequelize.define('Student', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          full_name: {
            type: DataType.STRING,
            allowNull: false
          },
          email: {
            type: DataType.STRING,
            allowNull: false
          },
          createdAt: {
            type: DataType.DATE
          },
          updatedAt: {
            type: DataType.DATE
          }
        },
    {
        tableName: "students"
    });
    return Student;
}