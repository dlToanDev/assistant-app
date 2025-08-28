import { ethers } from "ethers";

export const connectBlockchain = async () => {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const contractAddress = "0x1234abcd..."; // địa chỉ smart contract
  const abi = [ /* ABI JSON */ ];

  const contract = new ethers.Contract(contractAddress, abi, provider);

  return contract;
};
