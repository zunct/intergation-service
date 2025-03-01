export function roundToTwoDecimals(num: number): number {
  return Math.round(num * 100) / 100;
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}
