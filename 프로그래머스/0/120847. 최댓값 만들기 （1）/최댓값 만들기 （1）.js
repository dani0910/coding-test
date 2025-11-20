    function solution(numbers){
      // let arr=[]
      // arr.push(Math.max(...numbers))
      // for(i=0; i<numbers.length; i++){
      //   if(numbers[i] === arr[0]){
      //     numbers.splice(i,1);
      //   }
      // }
      // arr.push(Math.max(...numbers))       
      //  return arr.reduce((a,b)=>a*b)
    let max1 = Math.max(...numbers)
      numbers.splice(numbers.indexOf(max1),1)
      let max2 = Math.max(...numbers)
      return max1 * max2
    }