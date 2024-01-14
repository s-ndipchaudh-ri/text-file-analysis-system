function findTopKWords(text, k) {
    // Normalize and split the text into words
    const words = text.toLowerCase().match(/\w+/g);
  
    // Count the frequencies of each word
    const wordFrequencies = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
  
    // Sort the words by frequency and select the top k words
    const topKWords = Object.entries(wordFrequencies)
      .sort((a, b) => b[1] - a[1]) // Sort by frequency
      .slice(0, k) // Take the top k elements
      .map(item => ({ word: item[0], count: item[1] }));
  
    return topKWords;
  }
  
  module.exports = {
    findTopKWords
  }