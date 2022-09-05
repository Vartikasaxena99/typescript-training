function varArgs(...args: number[]) {
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
      sum+=args[i];
    }
    return sum;
  }
  let value:any=prompt("Enter the length of arguments");
  let y:number[]=[];
  for(let i=0;i<value;i++)
  {
    let val:any=prompt("Enter the value of arguments");
    let val1=parseInt(val);
    if(val1===0)
    {
      console.log("You have entered 0");
      break;
    }
    y.push(val1);
  }
  console.log("The sum of arguments is: "+varArgs(...y));
  
  