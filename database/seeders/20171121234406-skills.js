'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let timestamp = new Date();

    return queryInterface.bulkInsert('skills', [
      {
        grade: '6',
        chapter: 'R',
        skill: '1',
        subskill: null,
        title: 'Write a ratio',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '2',
        subskill: null,
        title: 'Write a ratio: word problems',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '3',
        subskill: null,
        title: 'Identify equivalent ratios',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '4',
        subskill: null,
        title: 'Write an equivalent ratio',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '5',
        subskill: null,
        title: 'Ratio tables',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '6',
        subskill: null,
        title: 'Equivalent ratios: word problems',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '7',
        subskill: null,
        title: 'Unit rates and equivalent rates',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '8',
        subskill: null,
        title: 'Compare ratios: word problems',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '9',
        subskill: null,
        title: 'Unit rates: word problems',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '10',
        subskill: null,
        title: 'Do the ratios form a proportion?',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '11',
        subskill: null,
        title: 'Solve the proportion',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        grade: '6',
        chapter: 'R',
        skill: '12',
        subskill: null,
        title: 'Scale drawings: word problems',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
