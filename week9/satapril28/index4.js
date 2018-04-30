let dropToastPromisified =() => {
return new Promise((resolve,reject)=>{
    let drop = Math.random();
    if(drop<0.5) {
        console.log("Landed butter-side up!");
        resolve();
    }
    else{
        console.log("Landed butter-side down...");
        reject();

    }
});
}
dropToastPromisified()
.then(()=>{
    alert('Whew, that was close!');
 }).catch(()=>{
    alert('Well shucks, there goes my toast...');
 });
