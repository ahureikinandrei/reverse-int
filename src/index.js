module.exports = function reverse (n) {
    if (n<0) {
        n = -n;
    }
    let nStr = n + '';
    return +nStr.split('').reverse().join(''); 
}
