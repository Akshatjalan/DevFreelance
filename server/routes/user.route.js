import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser); //verifyToken will call jwt middleware to check token is valid, than delete function will called
router.get("/:id", getUser);

export default router;
