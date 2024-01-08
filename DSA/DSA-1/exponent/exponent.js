function calculateExponent(b,p)
{
   if(p==0)
   {
    return 1;
   }
    else
    {
    return b*calculateExponent(b,p-1)
    }
}
console.log(calculateExponent(3,3))