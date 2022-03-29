// Write a function called power which accepts a base and an exponent
// The function should return the power of the base to the exponent
// This funtion should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

function power(num, n){
    if (n === 0) return 1;
    return num * power(num, n - 1)
}
