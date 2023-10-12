const {
  sumValuesOfWords,
  reduceCountValuesToPercent,
  SearchAndSolidGroubsWords,
} = require("./helpers");

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};



const GenerateThree = (lenStr, str) => {
    let a = SearchAndSolidGroubsWords(str);
    a = reduceCountValuesToPercent(a, sumValuesOfWords(a));
    tempArr = [];
    res ='';
    a.forEach((v, w) => {
      for (let j = 0; j < v; j++) {
        tempArr.push(w);
      }
    });
    
    for(let i = 0; i < lenStr; i++) {
        res += tempArr[Math.floor(Math.random() * tempArr.length)];
    }
    return res;
};

module.exports = GenerateThree;
