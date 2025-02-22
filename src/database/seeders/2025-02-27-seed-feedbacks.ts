/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *                               
 * "The_Kitchen (Node.js + TypeScript)" backend for food ordering system        *
 *                                                                              *
 * @license MIT                                                                 *
 * @author Goran Vujnović                                                       *
 * @year 2025                                                                   *
 *                                                                              *
 * Permission is hereby granted, free of charge, to any person obtaining a copy *
 * of this software and associated documentation files (the "Software"), to deal*
 * in the Software without restriction, including without limitation the rights *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell    *
 * copies of the Software, and to permit persons to whom the Software is        *
 * furnished to do so, subject to the following conditions:                     *
 *                                                                              *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR   *
 * IMPLIED.                                                                     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    console.log('Seeding feedbacks...');
    await queryInterface.bulkInsert('Feedbacks', [
      {
        userId: 1, 
        dishId: 1, 
        rating: 5,
        comment: 'Absolutely delicious, best spaghetti ever!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, 
        dishId: 2, 
        rating: 4,
        comment: 'Great salad, but could use more dressing.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: null, // Example of anonymous feedback (userId can be null)
        dishId: 3, 
        rating: 3,
        comment: 'The cake was okay, a bit too sweet.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log('Seeding completed successfully.');
  },

  down: async (queryInterface: QueryInterface) => {
    console.log('Undoing seed...');
    await queryInterface.bulkDelete('Feedbacks', {}, {});
    console.log('Undo completed.');
  },
};