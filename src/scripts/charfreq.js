/**
 * 该脚本从标准输入读取文本，计算文本中每个字符出现的频率，然后显式频率最高字符的条形图。
 */

// 该类扩展 Map，使其在 key 没有对应值时，返回特定值而不是 null
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    add(text) {
        //移除空格，转换为大写
        text = text.replace(/\s/g, "").toUpperCase();

        for (let character of text) {
            let count = this.letterCounts.get(character); // Get old count
            this.letterCounts.set(character, count + 1);    // Increment it
            this.totalLetters++;
        }
    }


    // Convert the histogram to a string that displays an ASCII graphic
    toString() {
        // Convert the Map to an array of [key,value] arrays
        let entries = [...this.letterCounts];

        // Sort the array by count, then alphabetically
        entries.sort((a, b) => {              // A function to define sort order.
            if (a[1] === b[1]) {             // If the counts are the same
                return a[0] < b[0] ? -1 : 1; // sort alphabetically.
            } else {                         // If the counts differ
                return b[1] - a[1];          // sort by largest count.
            }
        });

        // Convert the counts to percentages
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalLetters * 100;
        }

        // Drop any entries less than 1%
        entries = entries.filter(entry => entry[1] >= 1);

        // Now convert each entry to a line of text
        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );

        // And return the concatenated lines, separated by newline characters.
        return lines.join("\n");
    }
}


// This async (Promise-returning) function creates a Histogram object,  
// asynchronously reads chunks of text from standard input, and adds those chunks to
// the histogram. When it reaches the end of the stream, it returns this histogram
async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}

// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints the histogram.
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });
