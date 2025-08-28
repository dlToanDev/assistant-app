import { Router } from "express";
import { loginWithWallet } from "../controllers/authController";

const router = Router();

router.post("/wallet-login", loginWithWallet);

export default router;
