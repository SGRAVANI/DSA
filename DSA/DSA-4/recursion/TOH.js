function TOH(n,a,b,c)
{
    if(n==1)
    {
        console.log(a,"=>",b)
        return
    }
   TOH(n-1,a,c,b)
   console.log(a,"=>",b)
   TOH(n-1,c,b,a)
}
TOH(3,"a","b","c")

function iterativeTowerOfHanoi(n, source, auxiliary, target) {
    let stack = [];
    stack.push({ disks: n, source: source, auxiliary: auxiliary, target: target });

    while (stack.length > 0) {
        let { disks, source, auxiliary, target } = stack.pop();
        if (disks === 1) {
            console.log(`Move disk 1 from ${source} to ${target}`);
        } else {
            stack.push({ disks: disks - 1, source: auxiliary, auxiliary: source, target: target });
            stack.push({ disks: 1, source: source, auxiliary: auxiliary, target: target });
            stack.push({ disks: disks - 1, source: source, auxiliary: target, target: auxiliary });
        }
    }
}

// Example usage
//iterativeTowerOfHanoi(3, 'A', 'B', 'C');
function myIterative(n,pegA,pegB,pegC)
{
let stack=[{disk:n,pegA:pegA,pegB:pegB,pegC:pegC}]
while(stack.length>0)
{
    
    let {disk,pegA,pegB,pegC}=stack.pop()
    if(disk==1)
    {
        console.log(`${disk} move from ${pegA}=>${pegB} `)
    }
    else{
        // stack.push({disk:disk-1,pegA:pegA,pegB:pegC,pegC:pegB})
        // stack.push({disk:1,pegA:pegA,pegB:pegC,pegC:pegB})
        // stack.push({disk:disk-1,pegA:pegC,pegB:pegB,pegC:pegA})
        //exchange value of a and c
        stack.push({disk:disk-1,pegA:pegC,pegB:pegB,pegC:pegA})
        stack.push({disk:1,pegA:pegA,pegB:pegB,pegC:pegC})

        //exchange value of c and b
        stack.push({disk:disk-1,pegA:pegA,pegB:pegC,pegC:pegB})
    }
   
}
}
myIterative(3,"a","b","c")