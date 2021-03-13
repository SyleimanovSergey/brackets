module.exports = function check(str, bracketsConfig) {
    let brackets = [],
        result = str;
    bracketsConfig.flat(0)
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i].join(''))
    }
    for (let i = 0; i <= str.length; i++) {
        for (let n = 0; n <= brackets.length; n++) {
            result = result.replace(brackets[n], '')
        }
    }
    return result.length === 0 ? true : false;

}
