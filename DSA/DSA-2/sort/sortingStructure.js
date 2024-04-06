// Problem Description
// You are given a list of marks over 5 subjects scored by n students. You need to sort the student by following rules.

// The student whose sum of marks will be highest must come at the top of the leaderboard.

// Students whose total sum of marks are the same will be sorted alphabetically ascending by name.

// In all other cases, student with lesser id will come before in the leaderboard

// Input format
// First line will contain a single integer n number of students.

// Next n lines will contain space separated unique integer Id, string S name of the student followed by 5 integers marks scored out of 100.

// Output format
// Print space separated list of sorted ids of the student in a single line

// Sample Input 1
// 3

// 1 Alan 45 56 21 32 74

// 2 Fabien 95 94 93 92 91

// 3 Gamora 85 65 54 65 76

// Sample Output 1
// 2 3 1
let data=[
[    1, "Alan" ,45, 56, 21, 32, 74],

[2, "Fabien" ,95 ,94, 93, 92, 91],

[3, "Gamora" ,85, 65, 54, 65, 76]

]
function comparator(a,b)
{
    let aMArks=a.slice(2)
    let bMArks=b.slice(2)
    let aTotal=aMArks.reduce((sum,ele)=>sum+ele,0)
    let bTotal=bMArks.reduce((sum,ele)=>sum+ele,0)
    console.log(aTotal,bTotal)
    if(aTotal!=bTotal)
    {
 if(aTotal>bTotal)
 {
    return -1;

 }
 else{
    return 1;
 }
    }
    if(a[1]!=b[1])
    {
        return a[1]<b[1]?-1:1
    }   
   return a[0]-b[0]   

}
data.sort(comparator)
console.log(data)
let a=[9,8,7,6,5,4]
a.sort((x,y)=>{
    if(x<y)
    {
        return -1
    }
    else{
        return 1;
    }
})
console.log(a)