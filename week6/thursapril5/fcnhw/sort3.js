var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];
            
  var newArr = arr.sort(function(a,b){
        return a.sum - b.sum;
});
console.log(newArr);