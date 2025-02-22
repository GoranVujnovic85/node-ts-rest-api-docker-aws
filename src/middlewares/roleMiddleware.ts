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
/*
import { Request, Response, NextFunction } from "express";

// Extended Request interface with user coming from Passport
interface AuthRequest extends Request {
    user?: { id: string; role: string };
}

const isCustomer = (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (req.user && req.user.role === "customer") {
        return next();
    }
    res.status(403).json({ success: false, message: "Forbidden: Customers only." });
};

const isAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (req.user && req.user.role === "admin") {
        return next();
    }
    res.status(403).json({ success: false, message: "Forbidden: Admins only." });
};

export { isCustomer, isAdmin };
*/