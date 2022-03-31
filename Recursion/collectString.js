// Write a function called collectStrings which accepts an object 
// and returns an array of all the values in object that have a typeof string

function collectStrings(obj) {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            arr.push(...collectStrings(obj[key]))
        } else if (typeof obj[key] === "string") arr.push(obj[key])
    }
    return arr;
}
