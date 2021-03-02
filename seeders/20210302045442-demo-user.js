'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      full_name: 'Administrador',     
      email: 'admin@gmail.com',
      password: 152124,
      level: 1,
      createdAt: new Date(),
      updateAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
