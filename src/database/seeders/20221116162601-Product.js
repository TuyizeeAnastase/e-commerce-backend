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
   await queryInterface.bulkInsert("Products",[
    {
      product_name:"scissors",
      price:456,
      color:'green',
      is_active:true,
      description:"this best product",
      discount:4,
      quantity:1,
      category_id:1,
      images:'https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/plumb-min_tg668c.gif',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      product_name:"scissors1",
      price:456,
      color:'green',
      is_active:true,
      description:"this best product",
      discount:4,
      quantity:1,
      category_id:1,
      images:'https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/plumb-min_tg668c.gif',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      product_name:"scissors3",
      price:456,
      color:'green',
      is_active:true,
      description:"this best product",
      discount:4,
      quantity:1,
      category_id:1,
      images:'https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/plumb-min_tg668c.gif',
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
    await queryInterface.bulkDelete("Products",null,{})
  }
};
