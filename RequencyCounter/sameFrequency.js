  // Write a function called sameFrequency. Given two positive integers, 
  // find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2){
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) return false;
    let lookup = {}
    for (let cha of numStr1) {
        lookup[cha] = lookup[cha] + 1 || 1;
    }
    for (let cha of numStr2) {
        if (!lookup[cha]) return false;
        else lookup[cha]--
    } 
    return true;
  }
