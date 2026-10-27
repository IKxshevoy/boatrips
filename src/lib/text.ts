// Messages use `<br></br><br></br>` as paragraph breaks. Split them into
// real paragraphs so we can render semantic <p> elements.
export const toParagraphs = (raw: unknown): string[] =>
  String(raw ?? "")
    .split(/(?:\s*<br\s*\/?>(?:<\/br>)?\s*){2,}/i)
    .map((p) => p.replace(/<br\s*\/?>(?:<\/br>)?/gi, " ").trim())
    .filter(Boolean);

export const formatPrice = (value: number) => `${value} €`;
