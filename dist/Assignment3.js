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

document.body.style.backgroundImage="linear-gradient(to right,violet,pink,silver,grey)";
        document.body.style.color="green";
        document.body.style.fontSize="70px";
        document.body.style.textAlign="center";
        document.body.style.fontStyle="bolder";
        // document.body.style.textTransform="LowerCase";
        document.body.style.textShadow="10px 10px 10px grey";
        document.body.style.marginTop="40vh";
        document.body.style.fontStyle="Italic"
        document.body.style.fontWeight="25px";
