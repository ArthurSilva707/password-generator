import chalk from "chalk";
import qrcode from "qrcode-terminal";

export const handleQRCode = async (err, result) => {
  if (err) {
    console.log("error on application");
    return;
  }
  const isSmall = result.type == 2;
  qrcode.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QRCode gerado com sucesso:\n"));
    console.log(qrcode);
  });
};
