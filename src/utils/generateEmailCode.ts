export default function generateVerificationCode() {
  const digits = "0123456789";
  let code = "";
  while (code.length !== 6) {
    for (let i = 0; i < 6; i++) {
      code += digits[Math.floor(Math.random() * 10)];
    }
  }
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  return { code: Number(code), expiration };
}
