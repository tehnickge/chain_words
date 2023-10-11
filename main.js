const { getRandomValues } = require("crypto");
const fs = require("fs");
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};


const Generate = (key, len, str = '') => {
    console.log('key ' + key)
    console.log('str ' + str)
    if(key == 0) {
        GenerateZero(len);
    } else if(key == 1) {
        GenerateFirst(len, str);
    } else if(key == 2) {

    }
};

const GenerateZero = (len) => {
    let str = "";
    for(let i = 0; i < len; i++) {
        str += words.random();
    }
}

const GenerateFirst = (len, str) => {
     let wordsMap = new Map();
     words.map(word =>{
        wordsMap.set(word,0);
     })
    for(let i = 0; i < str.length; i++) {
        if(wordsMap.has(str[i])){
            let tempCount = wordsMap.get(str[i]) + 1;
            wordsMap.set(str[i], tempCount)
        }
    }
    console.log(wordsMap);

    let wordsSumCount = 0;
    wordsMap.forEach((v, w) => {wordsSumCount += v });
    
    wordsCoefMap = new Map();
    wordsMap.forEach((v, w) => {wordsCoefMap.set(w,v)});
    wordsCoefMap.forEach((v,w) => {
        console.log(w);
    });

    console.log(wordsSumCount);
    
    console.log(wordsCoefMap);

    wordsCoefMap.forEach((v,w) => {
        wordsCoefMap.set(w, (((v / wordsSumCount) * 100)));
    })

    console.log(wordsCoefMap);

    let tempStr = '';
    let tempArrayChances = [];
    let resString = '';
    wordsCoefMap.forEach((v,w) => {
        for(let j = 0; j < v; j++) {
            tempStr += w;
        }
    });
    console.log(tempStr);
    for(let i = 0; i < len; i++)
    {
        resString += tempStr[Math.floor(Math.random() * tempStr.length)];
    }
    console.log(resString);
    return resString;
}


const words = [..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя "];
Generate(1, 1000,"я мудак ебаный".toLowerCase());