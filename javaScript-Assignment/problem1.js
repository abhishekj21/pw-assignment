function wordCount(text) {
  const words = text.toLowerCase().Split(/\s+/);
  const wordMap = new Map();

  for (const word of words) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }
  return wordMap;
}
const text = "Here is some text";
const wordCountMap = wordCount(text);
console.log(wordCountMap);
