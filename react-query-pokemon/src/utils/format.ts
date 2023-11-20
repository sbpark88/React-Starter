export const formatSharpNumber = (num: number | string, cipher = 3): string =>
  `#${String(num).padStart(cipher, "0")}`;
