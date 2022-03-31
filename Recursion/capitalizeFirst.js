  // Write a recursive function called capitalizeFirst.
  // Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
    if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    let res = capitalizeFirst(arr.slice(1));
    res.unshift(arr[0][0].toUpperCase() + arr[0].slice(1));
    return res;
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  