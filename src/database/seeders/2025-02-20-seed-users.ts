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
import * as bcrypt from 'bcrypt';

export default {
  up: async (queryInterface: QueryInterface) => {
    console.log('Seeding users...');
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Goran',
        email: 'goranv@gmail.com',
        password: 'test123', 
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'admin123', 
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'mirjana',
        email: 'mirjana@gmail.com',
        password: 'test12', 
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log('Seeding completed successfully.');
  },

  down: async (queryInterface: QueryInterface) => {
    console.log('Undoing seed...');
    await queryInterface.bulkDelete('Users', {}, {});
    console.log('Undo completed.');
  },
};