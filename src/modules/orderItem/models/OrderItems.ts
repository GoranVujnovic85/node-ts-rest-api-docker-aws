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
interface OrderItemAttributes {
  id?: number;
  orderId: number;
  dishId: number;
  quantity: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
  public id!: number;
  public orderId!: number;
  public dishId!: number;
  public quantity!: number;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    price: {
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
import Order from '../../order/models/Order'; 
import Dish from '../../dish/models/Dish';  

OrderItem.belongsTo(Order, {
  foreignKey: 'orderId',
});
OrderItem.belongsTo(Dish, {
  foreignKey: 'dishId',
});

export type { OrderItemAttributes, OrderItemCreationAttributes };
export default OrderItem;