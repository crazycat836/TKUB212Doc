const CHINESE_DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const MAX_SUPPORTED = 99;

/** 將 0–99 的整數轉成中文數字（如 15 → 十五）；超出範圍時退回阿拉伯數字 */
export function toChineseNumeral(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > MAX_SUPPORTED) return String(n);
  if (n < 10) return CHINESE_DIGITS[n];

  const tens = Math.floor(n / 10);
  const ones = n % 10;
  const tensPart = tens === 1 ? '十' : `${CHINESE_DIGITS[tens]}十`;
  return ones === 0 ? tensPart : `${tensPart}${CHINESE_DIGITS[ones]}`;
}
