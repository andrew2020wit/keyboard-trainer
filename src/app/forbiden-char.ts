export function removeForbiddenChar(text: string): string {
  const text2 = text.replace(/\s/gu, ' ');
  return text2.replace(/\s\s+/gu, ' ');
}
