export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0] || "";
}

export function getCurrentTimestamp(): number {
  return Date.now();
}
