"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "risks",
      [
        {
          riskrange: "Low",
          weight: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          riskrange: "Moderate",
          weight: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          riskrange: "Critical",
          weight: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("risks", null, {});
  },
};
