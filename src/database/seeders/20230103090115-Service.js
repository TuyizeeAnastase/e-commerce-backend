'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Services",[
    {
      name:"Tube Maintainance",
      profile:"https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/plumb-min_tg668c.gif",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:"masonory",
      profile:"https://res.cloudinary.com/depljf8uc/image/upload/v1664962399/hardwares_yxx7hx.gif",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:"van",
      profile:"https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/electricals-min_wgtg22.gif",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Services",null,{})
  }
};
