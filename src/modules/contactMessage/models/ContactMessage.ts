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
interface ContactMessageAttributes {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContactMessageCreationAttributes extends Optional<ContactMessageAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class ContactMessage extends Model<ContactMessageAttributes, ContactMessageCreationAttributes> 
  implements ContactMessageAttributes {

    public id!: number;
    public name!: string;
    public email!: string;
    public subject!: string;
    public message!: string;
    public status!: string;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
ContactMessage.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'new',
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default ContactMessage;