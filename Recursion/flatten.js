// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        if (Array.isArray(el)) {
            el = flatten(el)
        } 
        newArray = newArray.concat(el)
    }
    
    return newArray;
  }