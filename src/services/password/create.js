import chalk from "chalk";
import { handlePassword } from "./handle.js";

import dotenv from "dotenv";

dotenv.config();

export const createPassword = async () => {
  console.log(chalk.green("password"));
  const password = await handlePassword();
  console.log(password);
};
