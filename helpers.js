const countOfAnyWords = (str, wordsMap) => {
    for (let i = 0; i < str.length; i++) {
        if (wordsMap.has(str[i])) {
            let tempCount = wordsMap.get(str[i]) + 1;
            wordsMap.set(str[i], tempCount)
        }
    }
    return wordsMap
}

const sumValuesOfWords = (wordsMap) => {
    let res = 0;
    wordsMap.forEach((v, w) => { res += v });
    return res
}

const reduceCountValuesToPercent = (wordsCoefMap, sum) => {
    wordsCoefMap.forEach((v, w) => {
        wordsCoefMap.set(w, (((v / sum) * 100)));
    })
    return wordsCoefMap
}


module.exports = {
    countOfAnyWords,
    sumValuesOfWords,
    reduceCountValuesToPercent,

}