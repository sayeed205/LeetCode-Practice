class Solution {
    public String reorderSpaces(String text) {
        String[] words = text.trim().split("\\s+");
        int wordCount = words.length;
        int spaceCount = text.length() - text.replaceAll(" ", "").length();
        
        if (wordCount == 1) {
            return words[0] + " ".repeat(spaceCount);
        }
        
        int spacesBetween = spaceCount / (wordCount - 1);
        int extraSpaces = spaceCount % (wordCount - 1);
        String spacesBetweenStr = " ".repeat(spacesBetween);
        
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < wordCount; i++) {
            result.append(words[i]);
            if (i < wordCount - 1) {
                result.append(spacesBetweenStr);
            }
        }
        
        result.append(" ".repeat(extraSpaces));
        
        return result.toString();
    }
}
