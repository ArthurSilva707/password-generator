import prompt from "prompt";
import { promptQRCode } from "../../prompts/prompt-qrcode.js";
import { handleQRCode } from "./handle.js";

export const createQRCode = async () => {
  prompt.get(promptQRCode, handleQRCode);
  prompt.start();
};
