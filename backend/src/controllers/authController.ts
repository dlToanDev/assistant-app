import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifySignature } from "../utils/verifySignature";

// fake db user
const users: any[] = [];

export const loginWithWallet = async (req: Request, res: Response) => {
  try {
    const { address, signature, nonce } = req.body;

    if (!address || !signature || !nonce) {
      return res.status(400).json({ message: "Missing data" });
    }

    // verify chữ ký
    const isValid = verifySignature(address, signature, nonce);
    if (!isValid) return res.status(401).json({ message: "Invalid signature" });

    // check user trong db
    let user = users.find((u) => u.address === address);
    if (!user) {
      user = { id: users.length + 1, address };
      users.push(user);
    }

    // tạo token
    const token = jwt.sign({ id: user.id, address: user.address }, "SECRET_KEY", {
      expiresIn: "1d",
    });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
