//how bonusforEach was supposed to be done
var forEach=function(arr,callback){
    for(var i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}

forEach([1,2,3],function(item){
    console.log(item);
});

//how bonusMap was supposed to be implemented
var map=function(arr,callback){
    var newArray = [];
    for(var i=0;i<arr.length;i++){
        var item = arr[i];
        var newItem = callback(item);
        newArray.push(newItem);
    }
    return newArray;
}



var result=map([1,2,3],function(item){
    return item*item;
});

console.log(result);
//alternate to sort3
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];
            
arr.sort(function(a,b){
    var sum = function(acc,item){
        return acc + item;
    };
  
    var aSum = a.reduce(sum,0);
    var bSum = b.reduce(sum,0);
    return aSum - bSum;
});
console.log(arr);