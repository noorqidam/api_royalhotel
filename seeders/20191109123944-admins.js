'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', [
      {
        email: 'noorqidam@gmail.com',
        password: '1234',
        name: 'Qidam',
        image: 'https://carlisletheacarlisletheatre.org/images/user-icon-admin-5.gif',
      },
      {
        email: 'arkademy@gmail.com',
        password: 'bootcamp',
        name: 'Arkademy',
        image: 'https://www.arkademy.com/img/logo%20arkademy-01.9c1222ba.png',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  }
};
