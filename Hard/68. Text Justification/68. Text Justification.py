class Solution:
    def fullJustify(self, words, maxWidth):
        result = []
        line = []
        line_length = 0

        for word in words:
            if line_length + len(line) + len(word) <= maxWidth:
                line.append(word)
                line_length += len(word)
            else:
                line_str = ""
                if len(line) == 1:
                    line_str += line[0] + " " * (maxWidth - line_length)
                else:
                    total_spaces = maxWidth - line_length
                    gaps = len(line) - 1
                    space_per_gap = total_spaces // gaps
                    extra_spaces = total_spaces % gaps

                    for i in range(len(line) - 1):
                        line_str += line[i] + " " * space_per_gap
                        if i < extra_spaces:
                            line_str += " "

                    line_str += line[-1]

                result.append(line_str)
                line = [word]
                line_length = len(word)

        last_line = " ".join(line)
        padding = maxWidth - len(last_line)
        result.append(last_line + " " * padding)

        return result
