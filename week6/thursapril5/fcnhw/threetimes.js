function call3Times(fun) {
    fun();
    fun();
    fun();
  }

var input = function fun() {
    console.log('Hellow, world!')
};

call3Times(input);