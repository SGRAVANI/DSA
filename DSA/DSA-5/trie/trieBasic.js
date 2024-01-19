class Trie {
    constructor() {
        this.child = new Array(26).fill(null);
        this.isEnd = false;
    }

    insert(word) {
        let temp = this;
        for (let i = 0; i < word.length; i++) {
            const id = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (temp.child[id] === null) {
                temp.child[id] = new Trie();
            }
            temp = temp.child[id];
        }
        temp.isEnd = true;
    }
}

function replaceWord(root, word) {
    let temp = root;
    if (root === null) return word;
    for (let i = 0; i < word.length; i++) {
        const id = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (temp.isEnd) {
            return word.substring(0, i);
        }
        if (temp.child[id] === null) {
            return word;
        }
        temp = temp.child[id];
    }
    return word;
}

function replaceWords(dict, sentence) {
    const root = new Trie();
    for (const word of dict) {
        root.insert(word);
    }

    let ans = "";
    let temp = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            const rep = replaceWord(root, temp);
            ans += rep + " ";
            temp = "";
        } else {
            temp += sentence[i];
        }
    }
    const rep = replaceWord(root, temp);
    ans += rep;
    return ans;
}

function main() {
    let reader=require("readline-sync")
    const n =reader.questionInt ("Enter the number of words in the dictionary:");
    const dict = [];
    for (let i = 0; i < n; i++) {
        const word =reader.question(`Enter word ${i + 1} in the dictionary:`);
        dict.push(word);
    }
    const sentence = reader.question("Enter the sentence:");
    const ans = replaceWords(dict, sentence);
    console.log(ans);
}

main();