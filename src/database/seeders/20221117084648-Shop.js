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
   await queryInterface.bulkInsert("Shops",[
    {
      name:"tanker shop",
      summary:"this is tanker shop description",
      image:"https://res.cloudinary.com/depljf8uc/image/upload/v1670928883/tanks_wiifzu.png",
      is_active:true,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      name:"Industrial tools & equipment",
      summary:"this is industrial tools and equipment  shop description",
      image:"https://res.cloudinary.com/depljf8uc/image/upload/v1668441689/pexels-suntorn-somtong-1029243_qgtbvn.jpg",
      is_active:true,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      name:"Maintainance",
      summary:"this is Maintainance shop description",
      image:"https://res.cloudinary.com/depljf8uc/image/upload/v1668441684/pexels-bidvine-1249611_hsmphb.jpg",
      is_active:true,
      createdAt:new Date(),
      updatedAt:new Date(),
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
    await queryInterface.bulkDelete("Shops",null,{})
  }
};
