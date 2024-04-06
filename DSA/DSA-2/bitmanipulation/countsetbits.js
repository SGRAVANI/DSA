let n=7;
let count=0
101

while(n!=0)
{
    count+=(n&1);
    n=n>>1;

}
console.log(count)