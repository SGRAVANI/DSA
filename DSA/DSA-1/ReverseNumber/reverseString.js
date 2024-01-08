function reverse(str)
{
     str=str.split('');
    let s=0;
    let e=str.length-1;
    while(s<=e)
    {
        [str[s],str[e]]=[str[e],str[s]];
        s++;
        e--;
    }
    return str.join('');
}
let reader=require('readline-sync')
let str=reader.question("enter string to reverse")
console.log(reverse(str))