export function randomNo(n){
    let arr = new Array(n);
    for(var i = 0; i < n; i++){
      arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
  }
export function sum(arr){
  return arr.reduce((sum, currVal)=> sum + currVal , 0);
}