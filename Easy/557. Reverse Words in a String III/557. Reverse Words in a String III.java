class Solution {
    public String reverseWords(String s) {
        // Split the input string into words using whitespace as a delimiter
        String[] words = s.split(" ");

        // Create a StringBuilder to store the reversed words
        StringBuilder reversedWords = new StringBuilder();

        // Iterate through the words and reverse each word
        for (String word : words) {
            // Reverse the characters of the word and append it to reversedWords
            String reversedWord = new StringBuilder(word).reverse().toString();
            reversedWords.append(reversedWord).append(" ");
        }

        // Remove the trailing whitespace and convert StringBuilder to String
        String result = reversedWords.toString().trim();

        return result;
    }
}
