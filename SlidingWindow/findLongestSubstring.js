// Write a function called findLongestSubstring,
// which accepts a string and returns the length of the longest substring with all distinct characters

function findLongestSubstring(str) {
    let start = 0;
    let longest = 0;
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let cha = str[i];
        if (seen.hasOwnProperty(cha)) {
            start = Math.max(start, seen[cha] + 1);
        }
        longest = Math.max(longest, i - start + 1);
        seen[cha] = i;
    }
    return longest;
}