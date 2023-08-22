class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder sb = new StringBuilder();
        
        while (columnNumber > 0) {
            columnNumber--; // Adjust to 0-based index
            int remainder = columnNumber % 26;
            char digit = (char) ('A' + remainder);
            sb.insert(0, digit);
            columnNumber /= 26;
        }
        
        return sb.toString();
    }
}
