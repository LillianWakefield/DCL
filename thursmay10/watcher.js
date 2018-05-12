fs = require('fs');


fs.watch(
    './intro-to-node.md', 
    {encoding: 'buffer' },
(eventType, filename) => {
    if(filename){
        console.log(filename +" changed.");
    }
}
);