function banner(){
    var input = (prompt('What do you want to say with a fancy banner?'))
    var len = input.length
    fancy = Array(len+1).join('*');
    console.log(fancy)
    console.log(input)
    console.log(fancy)
}
banner();