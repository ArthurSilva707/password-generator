export const handlePassword = async () => {
  let permitted = [];

  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;

  if (process.env.UPPERCASE_LETTERS === "true")
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (process.env.LOWERCASE_LETTERS === "true")
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");

  if (process.env.NUMBERS === "true") permitted.push(..."0123456789");

  if (process.env.SPECIAL_CHARACTERS === "true")
    permitted.push(..."!@#$%&*()_+-={}[]:;\"'<>,./?|~");

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * permitted.length);
    password += permitted[index];
  }

  return password;
};
