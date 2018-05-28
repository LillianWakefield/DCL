var arr = [4, 1, 2, 3]
var myArr = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(myArr)

