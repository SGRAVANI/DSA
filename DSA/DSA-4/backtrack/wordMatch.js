/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let ans;
function solve(board,word,x,y,index,visited)
{
   console.log(index,visited,x,y)
if(index==word.length)
{
   ans=true
   return 
}
if(x<0||y<0||x>=board.length||y>=board[0].length||visited[x][y]==true)
{
    console.log("boundry",x,y)
   return ;
}
if(word[index]==board[x][y] && visited[x][y]===false)
{ console.log("matched with char",index,x,y)
   visited[x][y]=true
solve(board,word,x+1,y,index+1,visited)
solve(board,word,x-1,y,index+1,visited)
solve(board,word,x,y+1,index+1,visited)
solve(board,word,x,y-1,index+1,visited)
  visited[x][y]=false
}
else{
   return
}
}
var exist = function(board, word) {
   let visited=[]
   ans=false;
   for(let i=0;i<board.length;i++)
   {   visited[i]=new Array()
       for(let j=0;j<board[0].length;j++)
       {
       visited[i][j]=false
       }
   }
   for(let i=0;i<board.length;i++)
   {
       for(let j=0;j<board[i].length;j++)
       {
           
           if(board[i][j]==word[0])
           {   console.log(i,j,word[0])
               solve(board,word,i,j,0,visited)
               if(ans===true)
               {
                   break;
               }
            }
            
       }
   }
   return ans;
};
let board =[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word="SEE"
console.log(exist(board,word))