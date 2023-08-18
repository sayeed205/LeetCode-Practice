function reorderSpaces(text: string): string {
    const words: string[] = text.trim().split(/\s+/);
    const wordCount = words.length;
    const spaceCount = (text.match(/ /g) || []).length;

    if (wordCount === 1) {
        return words[0] + ' '.repeat(spaceCount);
    }

    const spacesBetween = Math.floor(spaceCount / (wordCount - 1));
    const extraSpaces = spaceCount % (wordCount - 1);
    const spacesBetweenStr = ' '.repeat(spacesBetween);

    let result = '';
    for (let i = 0; i < wordCount; i++) {
        result += words[i];
        if (i < wordCount - 1) {
            result += spacesBetweenStr;
        }
    }

    result += ' '.repeat(extraSpaces);

    return result;
}
