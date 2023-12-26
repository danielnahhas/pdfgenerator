"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Bar_Charts", [
      { date: "June", Branch1: 100 },
      { date: "July", Branch1: 200 },
      { date: "August", Branch1: 300 },
      { date: "June", Branch2: 150 },
      { date: "July", Branch2: 250 },
      { date: "August", Branch2: 350 },
      { date: "June", Branch3: 180 },
      { date: "July", Branch3: 280 },
      { date: "August", Branch3: 380 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Bar_Charts", null, {});
  },
};
