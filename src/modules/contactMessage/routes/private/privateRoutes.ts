
import { Router } from "express";
import contactMessageController from "../../controllers/contactMessage.controller";
//import authMiddleware from "../../../../middlewares/passport";

const router = Router();

// Privatne rute - dostupne samo autentifikovanim korisnicima
router.get("/message/:id", contactMessageController.getMessageById);
router.put("/message/:id/status", contactMessageController.updateMessageStatus);
router.delete("/message/:id", contactMessageController.deleteMessage);

export default router;