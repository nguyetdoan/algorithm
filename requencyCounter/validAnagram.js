//   Given two strings, write a function to determine if the second string is an anagram of the first.
//   An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
function validAnagram(first, second){
    let lookUp = {};
    if (second.length !== first.length) return false;
    for (let cha of first) {
        lookUp[cha] = lookUp[cha] + 1 || 1
    }
    for (let cha of second) {
        if (!lookUp[cha]) return false;
        else lookUp[cha]--
    }
    return true;
  }