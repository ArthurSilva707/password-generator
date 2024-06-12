import chalk from "chalk";

export const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha como gerar o QRCode (1- NORMAL OU 2- TERMINAL)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true,
  },
];
