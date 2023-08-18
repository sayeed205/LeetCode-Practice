class Solution:
    def reorderSpaces(self, text: str) -> str:
        text = " " + text + " "
        res = list(text)
        ans = []

        cnt = 0
        words = []
        i = 0

        while i < len(text) - 1:
            if res[i] == " " and i != 0:
                cnt += 1

            if res[i + 1] != " ":
                ft = i + 1
                i += 1
                while i < len(text) and res[i] != " ":
                    i += 1
                val = text[ft:i]
                words.append(val)
            else:
                i += 1

        sp = 0
        if len(words) - 1 != 0 and len(text) - 1 != 0:
            sp = cnt // (len(words) - 1)

        for word in words:
            ans.append(word)
            ans.append(" " * sp)

        rem = 0
        if len(words) - 1 != 0:
            rem = cnt % (len(words) - 1)
        if len(words) == 1:
            rem = cnt

        res1 = "".join(ans).rstrip()
        res1 += " " * rem

        return res1
