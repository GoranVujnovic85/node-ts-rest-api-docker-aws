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
interface PaymentAttributes {
  id?: number;
  orderId: number;
  method: string;
  status: string;
  paymentDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
  public id!: number;
  public orderId!: number;
  public method!: string;
  public status!: string;
  public paymentDate!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Payment.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    paymentDate: {
      type: DataTypes.DATE,
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

Payment.belongsTo(Order, {
  foreignKey: 'orderId',
});

export type { PaymentAttributes, PaymentCreationAttributes };
export default Payment;