const fs = require("fs");
const SelectMethod = require("./SelectMethod")


//make a method
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};



const words = [..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя "];
let res = SelectMethod(1, 10, "я мудак ебаный".toLowerCase(), words);
console.log(res)