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
    console.log('Seeding contact messages...');
    await queryInterface.bulkInsert('ContactMessages', [
      {
        name: 'Pera Peric',
        email: 'peraperic@gmail.com',
        subject: 'Inquiry',  
        message: 'This is a test message.',
        status: 'new',  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stojan Stojnic',
        email: 'stojnic.s@gmail.com',
        subject: 'Feedback',  
        message: 'Another test message.',
        status: 'new',  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log('Seeding completed successfully.');
  },

  down: async (queryInterface: QueryInterface) => {
    console.log('Undoing seed...');
    await queryInterface.bulkDelete('ContactMessages', {}, {}); 
    console.log('Undo completed.');
  },
};