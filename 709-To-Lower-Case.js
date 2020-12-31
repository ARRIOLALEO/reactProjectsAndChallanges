/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
        const map = new Map([
        ['A', 'a'],
        ['B', 'b'],
        ['C', 'c'],
        ['D', 'd'],
        ['E', 'e'],
        ['F', 'f'],
        ['G', 'g'],
        ['H', 'h'],
        ['I', 'i'],
        ['J', 'j'],
        ['K', 'k'],
        ['L', 'l'],
        ['M', 'm'],
        ['N', 'n'],
        ['O', 'o'],
        ['P', 'p'],
        ['Q', 'q'],
        ['R', 'r'],
        ['S', 's'],
        ['T', 't'],
        ['U', 'u'],
        ['V', 'v'],
        ['W', 'w'],
        ['X', 'x'],
        ['Y', 'y'],
        ['Z', 'z'],
    ])
    let finalStr = '';
    for (let i = 0; i < str.length; i++) {
        finalStr += map.get(str[i]) || str[i]
    }
    return finalStr;
};
