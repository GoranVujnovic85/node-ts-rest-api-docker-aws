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
interface DishAttributes {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface DishCreationAttributes extends Optional<DishAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Dishes extends Model<DishAttributes, DishCreationAttributes> implements DishAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Dishes.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false, 
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },
  {
    sequelize,
    timestamps: true, 
  }
);

// Defining associations
import DailyMenu from '../../dailyMenu/models/DailyMenu'; 
import OrderItem from '../../orderItem/models/OrderItems'; 
import Feedback from '../../feedback/models/Feedback';   

Dishes.belongsToMany(DailyMenu, {
  through: 'DailyMenuDishes',
  foreignKey: 'dishId',
  as: 'dailyMenus',
});
Dishes.hasMany(OrderItem, {
  foreignKey: 'dishId',
  onDelete: 'CASCADE',
});
Dishes.hasMany(Feedback, {
  foreignKey: 'dishId',
  onDelete: 'SET NULL',
});

export type { DishAttributes, DishCreationAttributes };
export default Dishes;