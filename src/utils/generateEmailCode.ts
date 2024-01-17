export default function generateVerificationCode(limit = 6) {
  const digits = "0123456789";
  let code = "";
  for (let i = 0; i < limit; i++) {
    code += digits[Math.floor(Math.random() * 10)];
  }
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  return { code: Number(code), expiration };
}
