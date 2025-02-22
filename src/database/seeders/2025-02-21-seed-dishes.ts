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
    console.log('Seeding dishes...');
    await queryInterface.bulkInsert('Dishes', [
      {
        name: 'Spaghetti Bolognese',
        description: 'Classic Italian pasta with rich meat sauce',
        price: 12.99,
        image: 'uploads/spaghetti_bolognese.jpg', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grilled Chicken Salad',
        description: 'Fresh salad with grilled chicken and vinaigrette',
        price: 9.50,
        image: 'uploads/chicken_salad.jpg', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center',
        price: 6.75,
        image: 'uploads/lava_cake.jpg', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log('Seeding completed successfully.');
  },

  down: async (queryInterface: QueryInterface) => {
    console.log('Undoing seed...');
    await queryInterface.bulkDelete('Dishes', {}, {});
    console.log('Undo completed.');
  },
};