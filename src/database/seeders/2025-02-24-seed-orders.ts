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
    console.log('Seeding orders...');
    await queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        date: new Date('2025-03-01'), // Order date
        status: 'pending',
        totalPrice: 35.48, // Total price (eg 2x12.99 + 9.50)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, 
        date: new Date('2025-03-02'),
        status: 'completed',
        totalPrice: 20.25, // Total price (eg 3x6.75)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3, 
        date: new Date('2025-03-03'),
        status: 'shipped',
        totalPrice: 22.49, // Total price (eg 1x12.99 + 9.50)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log('Seeding completed successfully.');
  },

  down: async (queryInterface: QueryInterface) => {
    console.log('Undoing seed...');
    await queryInterface.bulkDelete('Orders', {}, {});
    console.log('Undo completed.');
  },
};