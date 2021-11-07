const transpose = function (word) {
    let rowArray = [];
    let resultArray = [];
    for (let i = 0; i < word[0].length; i++) {
        for (let row = 0; row < word.length; row++) {
            rowArray.push(word[row][i]);
        }
        resultArray.push(rowArray);
        rowArray = [];
    }
    return resultArray;
};
const wordSearch = (letters, word) => {
    const joinHorizontal = letters.map((ls) => ls.join(""));
    // console.log(joinHorizontal);
    for (p of joinHorizontal) {
        // console.log(p);
        if (p.includes(word) || p === word) {
            return true;
        }
    }
    const vertical = transpose(letters);
    const joinVertical = vertical.map((ls) => ls.join(""));
    console.log(joinVertical);
    for (let v of joinVertical) {
        // console.log(l);
        if (v.includes(word) || v === word) {
            return true;
        }
    }
    return false
};
console.log(
    wordSearch(
        [
            ["A", "W", "C", "F", "Q", "U", "A", "L"],
            ["S", "E", "I", "N", "F", "E", "L", "D"],
            ["Y", "F", "C", "F", "K", "U", "A", "L"],
            ["H", "M", "J", "T", "I", "V", "R", "G"],
            ["W", "H", "C", "S", "N", "E", "R", "L"],
            ["B", "F", "R", "E", "G", "E", "Y", "B"],
            ["U", "B", "T", "W", "A", "P", "A", "I"],
            ["O", "D", "C", "A", "K", "U", "A", "S"],
            ["E", "Z", "K", "F", "Q", "U", "A", "L"],
        ],
        "KIkNG")
);

module.exports = wordSearch;