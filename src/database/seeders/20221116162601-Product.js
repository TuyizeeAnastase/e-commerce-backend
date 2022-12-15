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
      product_name:"Domed rounded water tanker",
      price:456,
      color:'green',
      is_active:true,
      description:"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit",
      discount:4,
      quantity:1,
      category_id:1,
      images:'https://res.cloudinary.com/depljf8uc/image/upload/v1674566012/Domed_round_water_tanker_gipchv.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      product_name:"quad rain water",
      price:456,
      color:'green',
      is_active:true,
      description:"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit",
      discount:4,
      quantity:1,
      category_id:1,
      images:'https://res.cloudinary.com/depljf8uc/image/upload/v1674566012/quard_rain_water_myszzt.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      product_name:"tool maintanance kit",
      price:456,
      color:'green',
      is_active:true,
      description:"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit",
      discount:4,
      quantity:1,
      category_id:3,
      images:'https://res.cloudinary.com/depljf8uc/image/upload/v1674566012/tool-maintenance_ck1l5i.jpg',
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
