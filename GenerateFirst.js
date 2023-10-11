const { 
    countOfAnyWords,
    sumValuesOfWords,
    reduceCountValuesToPercent,

    
} = require('./helpers')

const GenerateFirst = (len, str, words) => {
    // вытаскиваем весь список букв
    let wordsMap = new Map();
    words.map(word => {
        wordsMap.set(word, 0);
    })

    // считаем количество каждой из букв в тексте
    wordsMap = countOfAnyWords(str, wordsMap)
    // количество
    let wordsSumCount = sumValuesOfWords(wordsMap)

    // заменить на относительный коэф
    wordsCoefMap = new Map();

    //заполняет новый мап значением пред мапы
    wordsMap.forEach((v, w) => { wordsCoefMap.set(w, v); });
    
    // заменяет значение в мапе на относительный процент
    wordsCoefMap = reduceCountValuesToPercent(wordsCoefMap, wordsSumCount)
    
    let tempStr = '';
    let resString = '';
    wordsCoefMap.forEach((v, w) => {
        for (let j = 0; j < v; j++) {
            tempStr += w;
        }
    });

    for (let i = 0; i < len; i++) {
        resString += tempStr[Math.floor(Math.random() * tempStr.length)];
    }
    return resString;
};

module.exports = GenerateFirst