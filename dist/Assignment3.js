"use strict";
function varArgs(...args) {
    let sum = 0;
    
    for (let i = 0; i < args.length; i++) {
        let n=parseInt(args[i]);
        sum += n;
        
        
    }
    return sum;
}
let value = prompt("Enter the length of arguments");
let y = [];
for (let i = 0; i < value; i++) {
    let val = prompt("Enter the value of arguments");
    let val1 = parseInt(val);
    if(val1===0)
    {
        alert("You have entered 0");
        break;
    }
    y.push(val1);
    
}
document.write("The sum of arguments is : " + varArgs(...y));
