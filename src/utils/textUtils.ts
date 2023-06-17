export const truncateWord = (word: string, at: number): string => {
  return word.charAt(at);
};

// This is really a simple example. In the real world this function would've been parameterized
export const removeUnderscoreBetweenWords = (str: string) => {
  if (str.split("_").length <= 1) return str;
  return str.replace(/_/g, " ");
};
