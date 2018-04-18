function factor() {
    var input = parseInt(prompt('What do you want factored?'));
    for(i=1;i<input+1;i++){
        if((input % i) ==0){
            console.log(i)
        }
    }
}
factor()
