"use strict";
function varArgs(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
     return sum;
}

document.write("The sum of arguments 1,2,3,4: "+varArgs(1,2,3,4));
  
document.write("<br>The sum of arguments 1,2:"+varArgs(1,2));
  
document.write("<br>The sum of arguments 1,3,4:"+varArgs(1,2,3));