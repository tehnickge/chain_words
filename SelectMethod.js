const GenerateZero = require("./GenerateZero");
const GenerateFirst = require("./GenerateFirst");

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};


const SelectMethod = (key, len, str = '', words) => {
    console.log('key ' + key)
    console.log('str ' + str)
    let res = '';
    if (key == 0) {
       res = GenerateZero(len, words);
    } else if (key == 1) {
        res = GenerateFirst(len, str, words);
    } else if (key == 2) {

    }
    return res;
};

module.exports = SelectMethod
