function solution(n){
      let count = 0;
      let arr = [];

      for(i=1; i<=n; i++){
        if(Number.isInteger(n/i)== true)arr.push(i)
      }
      for(i of arr){
        for(j of arr){
          if(i * j == n) count+=1
        }
      }
      return count
    }