// You have N books, each with A[i] number of pages. M students need to be allocated contiguous books, with each student getting at least one book.
// Out of all the permutations, the goal is to find the permutation where the sum of maximum number of pages in a book allotted to a student should be minimum, out of all possible permutations.

// Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).
let a=[10,20,30,40]
//1:10,2:20+30+40   max =90
//2: 30,70 max={70}
//3:10+20+30 60     2:40  max=60

//min of all max=60
function isValid(a,student,pages)
{
   
let count=1;
let sum=0

//console.log(pages)
for(let i=0;i<a.length;i++)
{   //console.log(i)
    sum=sum+a[i]
    //console.log("sum is",sum)
    if(sum>pages)
    {
        count++;
        sum=a[i]
        if(count>student)
        {
            return false
        }
        
    }
}
//console.log(count)
//if(count==student)
//{
    return true
//}
// else{
//     return false
// }
}
let min=Math.max(...a);
let max=a.reduce((sum,ele)=>sum+ele,0)
let student=2
let res=Infinity

for(let pages=min;pages<=max;pages++)
{
    console.log(isValid(a,student,pages))
if(isValid(a,student,pages))
{
res=Math.min(pages,res)
}
}
console.log(res)