"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "performances",
      [
        {
          title: "Unsaisfactory",
          num: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Needs Improvment",
          num: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Meets Requirment",
          num: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Exceeds Requirments",
          num: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Outstanding",
          num: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("performances", null, {});
  },
};
