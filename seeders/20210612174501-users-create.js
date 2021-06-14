'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const roles1 = ['admin','author','guest'];
    let User = [];

    for (let i=1 ; i<21 ; i++){
        let username;
        let email;
        let password; 
        let role;
        let createdAt;
        let updatedAt;
        User.push({
            id  : i,
            username:faker.internet.userName(),
            email:faker.internet.email(),
            password:faker.internet.password(),
            role:roles1[parseInt(Math.random()*3)],
            createdAt:faker.date.recent(),
            updatedAt:faker.date.future()
        })
    }

    var x1 = queryInterface.bulkInsert('users',User,{}) ;
    return Promise.all([x1]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
