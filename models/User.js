module.exports = (Sequelize, DataType) => {

    const User = Sequelize.define('User', {
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
          password: {
            type: DataType.STRING,
            allowNull: false
          },
          level: {
            type: DataType.INTEGER,
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
        tableName: "users"
    });
    return User;
}