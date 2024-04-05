//serch element from matrix which is sorted by row and column
let matrix=[
[1 ,5, 9],
[10, 11, 13],
[12 ,13 ,15]]
let target=12
function bs(matrix,target)
{
    let row=0;
    let col=matrix[0].length-1;
    //let res=-1
    while(row<matrix.length && col>=0)
    {
        if(matrix[row][col]==target)
        {
            return [row,col]
        }
        else if(target>matrix[row][col])
        {
            row++;
        }
        else if(target<matrix[row][col]){
           col--
        }
    }
    return -1;
}
console.log(bs(matrix,target))
console.log(bs(matrix,13))