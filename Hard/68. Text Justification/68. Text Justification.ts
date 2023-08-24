function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let line: string[] = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + line.length + word.length <= maxWidth) {
            line.push(word);
            lineLength += word.length;
        } else {
            let lineStr = '';
            if (line.length === 1) {
                lineStr += line[0] + ' '.repeat(maxWidth - lineLength);
            } else {
                const totalSpaces = maxWidth - lineLength;
                const gaps = line.length - 1;
                const spacePerGap = Math.floor(totalSpaces / gaps);
                const extraSpaces = totalSpaces % gaps;

                for (let i = 0; i < line.length - 1; i++) {
                    lineStr += line[i] + ' '.repeat(spacePerGap);
                    if (i < extraSpaces) {
                        lineStr += ' ';
                    }
                }
                lineStr += line[line.length - 1];
            }

            result.push(lineStr);
            line = [word];
            lineLength = word.length;
        }
    }

    const lastLine = line.join(' ');
    const padding = maxWidth - lastLine.length;
    result.push(lastLine + ' '.repeat(padding));

    return result;
}
