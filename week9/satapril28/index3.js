function addNumbers(x,y){
       return new Promise(function (resolve,reject){
        if(typeof x == 'number' && typeof y == 'number'){
            var sum = x + y;
            resolve(sum);
        }else{ 
            reject(new Error('not a number'))
       }
    });
};
var x = 3;
var y = 'j';
addNumbers(x, y)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });
