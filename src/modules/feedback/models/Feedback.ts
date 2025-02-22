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
interface FeedbackAttributes {
  id?: number;
  userId: number | null; // allows a record in the Feedback table to exist even if it is not associated with a specific user (userId) or dish (dishId).
  dishId: number | null; // allows a record in the Feedback table to exist even if it is not associated with a specific user (userId) or dish (dishId).
  rating: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface FeedbackCreationAttributes extends Optional<FeedbackAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Feedback extends Model<FeedbackAttributes, FeedbackCreationAttributes> implements FeedbackAttributes {
  public id!: number;
  public userId!: number | null;
  public dishId!: number | null;
  public rating!: number;
  public comment!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Feedback.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true, 
    },
  },
  {
    sequelize,
    timestamps: true, 
  }
);

// Definisanje asocijacija
import User from '../../user/models/User'; 
import Dish from '../../dish/models/Dish'; 

Feedback.belongsTo(User, {
  foreignKey: 'userId'
});
Feedback.belongsTo(Dish, {
  foreignKey: 'dishId'
});

export type { FeedbackAttributes, FeedbackCreationAttributes };
export default Feedback;