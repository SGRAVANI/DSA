function ugly(num)
{
    let r=new Array(num+1);
    r[1]=1
    let by3;
    let by5;
   let by2=by3=by5=1
   for(let i=2;i<=num;i++)
   {
    let mby2=r[by2]*2
    let mby3=r[by3]*3
    let mby5=r[by5]*5
    r[i]=Math.min(mby2,mby3,mby5)
   if(r[i]==mby2)
   {
    by2++
   }
   if(r[i]==mby3)
   {
    by3++
   }
   if(r[i]==mby5)
   {
    by5++
   }

   }
   return r[num]
}
console.log(ugly(10))