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

import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../config/database';

// Define interface for model attributes
interface DailyMenuAttributes {
  id?: number;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface DailyMenuCreationAttributes extends Optional<DailyMenuAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class DailyMenu extends Model<DailyMenuAttributes, DailyMenuCreationAttributes>
  implements DailyMenuAttributes {
  public id!: number;
  public date!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DailyMenu.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true, 
  }
);

// Define the association (I assume the Dish model exists)
import Dish from '../../dish/models/Dish'; 
DailyMenu.belongsToMany(Dish, {
  through: 'DailyMenuDishes',
  foreignKey: 'dailyMenuId',
  as: 'dishes',
});

export type { DailyMenuAttributes, DailyMenuCreationAttributes };
export default DailyMenu;