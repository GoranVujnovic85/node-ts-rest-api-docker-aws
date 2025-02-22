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
interface OrderAttributes {
  id?: number;
  userId: number;
  date: Date;
  status: string;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public date!: Date;
  public status!: string;
  public totalPrice!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false, 
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false, 
    },
  },
  {
    sequelize,
    timestamps: true
  }
);

// Defining associations
import User from '../../user/models/User';         
import OrderItem from '../../orderItem/models/OrderItems'; 
import Payment from '../../payment/models/Payment'; 

Order.belongsTo(User, {
  foreignKey: 'userId',
});
Order.hasMany(OrderItem, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
});
Order.hasOne(Payment, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
});

export type { OrderAttributes, OrderCreationAttributes };
export default Order;