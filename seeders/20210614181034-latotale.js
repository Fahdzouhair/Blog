'use strict';
var faker = require('faker');

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
   
    let Tags = [];

    for (let i=1 ; i<=20 ; i++){
        let name;
        let createdAt;
        let updatedAt;
        User.push({
            id : i,
            name:faker.lorem.sentence(3),
            createdAt:faker.date.recent(),
            updatedAt:faker.date.future()
        })
    }

    var x2 = queryInterface.bulkInsert('tags',Tags,{}) ;
    
    let Articeles = [];
    let numOfActicles = 0;
    for (let i = 0; i<=20 ; i++){
      let n = parseInt(Math.random()*8)+2;
      let p = i-1;
      let dateU = users[numberOfArticles].createdAt;
      let dateP = faker.date.between(dateU, 2021);
      for(let j=0 ;j<= n ; j++){
        ++numOfActicles;
        Articles.push({
          id:numberOfArticles,
          title: faker.random.words()+`${j}`,
          content: faker.lorem.paragraph(),
          published:true,
          createdAt: dateP, 
          updatedAt: dateP,
          UserId: users[p.toString()].id,
        })
      }
    }

    var x3 = queryInterface.bulkInsert('articles',Articles,{}) ;

    let articleTags = [];

    for(let i=1;i<=10;i++) {
        let n = parseInt(Math.random()*4 )+ 2;
        let p=i-1;
        let date=articles[p.toString()].createdAt;
       
        for(let j=1;j<=n;j++) {
          
          articleTags.push({

          createdAt: faker.date.between(date,2021),
          updatedAt: faker.date.between(date,2021),
          articleId: articles[p.toString()].id,
          tagId: tags[p.toString()].id,

        })

      }

    }

    var x4 = queryInterface.bulkInsert('articletags',articleTags,{}) ;


    let comments = [];
    let numberOfComments =0;

    for(let i = 1; i < numberOfArticles ;i++) {

      let n = parseInt(Math.random()*11);
      let p=i;

      for(let j = 1 ;j <= n; j++){

        numberOfComments++;
        let date=articles[p.toString()].createdAt;
        comments.push({

          id: numberOfComments,
          content: faker.lorem.paragraph(),
          createdAt: faker.date.between(date,2021),
          updatedAt: faker.date.between(date,2021),
          articleId: articles[p.toString()].id

        })

      }

    }

    var x5 = queryInterface.bulkInsert('comments',comments,{}) ;

    return Promise.all([x1, x2, x3, x4, x5]);
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
