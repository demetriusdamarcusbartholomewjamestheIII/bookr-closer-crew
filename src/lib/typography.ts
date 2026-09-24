/** Glue an em dash to the word before it — balanced headings otherwise open a line with "— …". */
export function keepDashWithPrecedingWord(text: string) {
  return text.replace(/ — /g, " — ");
}
