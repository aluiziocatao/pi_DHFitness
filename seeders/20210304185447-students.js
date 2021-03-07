'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Students', 
    [
      {
        full_name: 'Aluízio dos Santos',
        email: 'aluzio@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Marcos Spano',
        email: 'marcos@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Students', null, {}),
};
