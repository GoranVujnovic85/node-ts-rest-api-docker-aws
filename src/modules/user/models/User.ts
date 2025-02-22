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
interface UserAttributes {
  id?: number;
  username: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
  },
  {
    sequelize,
    timestamps: true, 
  }
);

// Defining associations
import Order from '../../order/models/Order';     
import Feedback from '../../feedback/models/Feedback'; 

User.hasMany(Order, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
User.hasMany(Feedback, {
  foreignKey: 'userId',
  onDelete: 'SET NULL',
});

export type { UserAttributes, UserCreationAttributes };
export default User;