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

import { Request, Response } from "express";
import ContactMessage from "../models/ContactMessage";
import responseHandler from "../../../utils/responseHandler";

class ContactMessageController {
    
    async createMessage(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, subject, message } = req.body;
            const newMessage = await ContactMessage.create({
                name,
                email,
                subject,
                message,
                status: "new",
            });
            responseHandler.successResponse(res, "Message created successfully", newMessage, 201);
        } catch (error: any) {
            responseHandler.errorResponse(res, "Failed to create message", 500, error.message);
        }
    }

    async getAllMessages(req: Request, res: Response): Promise<void> {
        try {
            const messages = await ContactMessage.findAll();
            responseHandler.successResponse(res, "Messages retrieved successfully", messages);
        } catch (error: any) {
            responseHandler.errorResponse(res, "Failed to retrieve messages", 500, error.message);
        }
    }

    async getMessageById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const message = await ContactMessage.findByPk(id);
            if (!message) {
                responseHandler.errorResponse(res, "Message not found", 404);
                return;
            }
            responseHandler.successResponse(res, "Message retrieved successfully", message);
        } catch (error: any) {
            responseHandler.errorResponse(res, "Failed to retrieve message", 500, error.message);
        }
    }

    async updateMessageStatus(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const message = await ContactMessage.findByPk(id);
            if (!message) {
                responseHandler.errorResponse(res, "Message not found", 404);
                return;
            }
            message.status = status;
            await message.save();
            responseHandler.successResponse(res, "Message status updated successfully", message);
        } catch (error: any) {
            responseHandler.errorResponse(res, "Failed to update message status", 500, error.message);
        }
    }

    async deleteMessage(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const message = await ContactMessage.findByPk(id);
            if (!message) {
                responseHandler.errorResponse(res, "Message not found", 404);
                return;
            }
            await message.destroy();
            responseHandler.successResponse(res, "Message deleted successfully");
        } catch (error: any) {
            responseHandler.errorResponse(res, "Failed to delete message", 500, error.message);
        }
    }
}

export default new ContactMessageController();