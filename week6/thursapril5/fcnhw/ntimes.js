function call3Times(num, fun) {
    for(i=0;i<5;i++){
        fun();
    }
}
var input = function fun() {
    console.log('Hellow, world!')
};

call3Times(5,input)