import he from "he"

export const formatText = (text: string): string => {
  if(text) {
    // replace  dangerous symbols -> ex.: < > < ""
    return he.escape(text.trim())
  }

  return ""
}