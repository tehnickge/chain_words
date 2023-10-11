Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};


const GenerateZero = (len, words) => {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += words.random();
    }
    return str
}

module.exports = GenerateZero