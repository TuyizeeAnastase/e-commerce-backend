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
   await queryInterface.bulkInsert("Users",[
    {
      full_name:"John Peter",
      email:"john@gmail.com",
      password:"$2a$12$GXXRXhI2G7bQrHW44XzTcOXoOTAv7tgGKPKffSC606XuKoOmOc4My",
      roleId:1,
      phone_number:"+250787454554",
      is_active:true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      full_name:"anastase Tuyizere",
      email:"anastase@gmail.com",
      password:"$2a$12$GXXRXhI2G7bQrHW44XzTcOXoOTAv7tgGKPKffSC606XuKoOmOc4My",
      roleId:2,
      phone_number:"+250787454555",
      is_active:true,
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
    await queryInterface.bulkDelete("Users",null,{})
  }
};
