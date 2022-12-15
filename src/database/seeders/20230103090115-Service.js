"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Services", [
      {
        name: "Tube Maintainance",
        profile:
          "https://res.cloudinary.com/duhetxdbs/image/upload/v1674924528/tube_znffcg.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tanks",
        profile:
          "https://res.cloudinary.com/duhetxdbs/image/upload/v1674924703/tanker_qqr2hb.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "electricity",
        profile:
          "https://res.cloudinary.com/duhetxdbs/image/upload/v1674924528/ele_vvspnj.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Services", null, {});
  },
};
