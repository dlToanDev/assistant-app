import { ethers } from "ethers";

export const verifySignature = (
  address: string,
  signature: string,
  nonce: string
): boolean => {
  try {
    // Dùng ethers để recover địa chỉ từ chữ ký
    const recoveredAddress = ethers.utils.verifyMessage(nonce, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
  } catch (error) {
    console.error("Verify signature error:", error);
    return false;
  }
};
