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

const SearchAndSolidGroubsWords = (str) => { 
    let resStr = ''
    let strGroupWordsMap = new Map();
    for (let i = 0; i < str.length -1; i++) {
        console.log(strGroupWordsMap.has(`${str[i]}${str[i + 1]}`));
            if(!( strGroupWordsMap.has(`${str[i]}${str[i+1]}`) )) {
                    strGroupWordsMap.set(`${str[i]}${str[i+1]}`, 1)
                } else {
                    let tempCount = strGroupWordsMap.get(`${str[i]}${str[i+1]}`);
                    console.log(tempCount)
                    strGroupWordsMap.set(`${str[i]}${str[i + 1]}`, tempCount + 1);
                }
                    
        
    }
    console.log(strGroupWordsMap)
    return strGroupWordsMap;
}


module.exports = {
  countOfAnyWords,
  sumValuesOfWords,
  reduceCountValuesToPercent,
  SearchAndSolidGroubsWords,
};