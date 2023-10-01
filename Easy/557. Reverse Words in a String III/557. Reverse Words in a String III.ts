function reverseWords(s: string): string {
    // Split the input string into words using whitespace as a delimiter
    const words: string[] = s.split(' ');

    // Create an array to store the reversed words
    const reversedWords: string[] = [];

    // Iterate through the words and reverse each word
    for (const word of words) {
        // Reverse the characters of the word and push it to the reversedWords array
        const reversedWord: string = word.split('').reverse().join('');
        reversedWords.push(reversedWord);
    }

    // Join the reversed words with whitespace to form the final sentence
    const result: string = reversedWords.join(' ');

    return result;
}
