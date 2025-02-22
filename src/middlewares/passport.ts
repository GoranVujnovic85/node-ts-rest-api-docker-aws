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
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { Request } from "express";
import User from "../modules/contactMessage/models/ContactMessage"; 

dotenv.config();

// Options for JWT strategy with explicit type `StrategyOptions`
const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string,
    passReqToCallback: false, // Can be `true' if you need `req' in the strategy

};

// Define the type for jwtPayload
interface JwtPayload {
    id: number;
    email: string;
}

// Passport strategy for JWT authentication

passport.use(
    new JwtStrategy(options, async (jwtPayload: JwtPayload, done) => {
        try {
            const user = await User.findByPk(jwtPayload.id); // Find user by ID
            if (user) {
                return done(null, { id: user.id, role: user.role });
            }
            return done(null, false);
        } catch (error) {
            return done(error, false);
        }
    })
);

export default passport;
*/