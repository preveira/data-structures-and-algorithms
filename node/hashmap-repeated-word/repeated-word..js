function repeatedWord(str) {
  const words = str.toLowerCase().match(/\b\w+\b/g);
  const wordMap = {};

  for (let word of words) {
    if (wordMap[word]) {
      return word;
    } else {
      wordMap[word] = 1;
    }
  }
  return null;
}

module.exports = repeatedWord;
