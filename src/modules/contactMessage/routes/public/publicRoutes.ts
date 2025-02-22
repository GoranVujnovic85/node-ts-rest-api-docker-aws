
import { Router } from "express";
import passport, { session } from "passport";
import contactMessageController from "../../controllers/contactMessage.controller";
//import { isCustomer, isAdmin } from "../../../../middlewares/roleMiddleware";

const router = Router();

// Public routes - everyone can use them
router.post("/contact", contactMessageController.createMessage);
router.get("/messages", contactMessageController.getAllMessages);


export default router;