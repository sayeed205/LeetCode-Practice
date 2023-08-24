import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        List<String> line = new ArrayList<>();
        int lineLength = 0;

        for (String word : words) {
            if (lineLength + line.size() + word.length() <= maxWidth) {
                line.add(word);
                lineLength += word.length();
            } else {
                StringBuilder lineStr = new StringBuilder();
                if (line.size() == 1) {
                    lineStr.append(line.get(0));
                    lineStr.append(" ".repeat(maxWidth - lineLength));
                } else {
                    int totalSpaces = maxWidth - lineLength;
                    int gaps = line.size() - 1;
                    int spacePerGap = totalSpaces / gaps;
                    int extraSpaces = totalSpaces % gaps;

                    for (int i = 0; i < line.size() - 1; i++) {
                        lineStr.append(line.get(i));
                        lineStr.append(" ".repeat(spacePerGap));
                        if (i < extraSpaces) {
                            lineStr.append(" ");
                        }
                    }
                    lineStr.append(line.get(line.size() - 1));
                }

                result.add(lineStr.toString());
                line.clear();
                line.add(word);
                lineLength = word.length();
            }
        }

        StringBuilder lastLine = new StringBuilder(String.join(" ", line));
        int padding = maxWidth - lastLine.length();
        result.add(lastLine.toString() + " ".repeat(padding));

        return result;
    }
}
