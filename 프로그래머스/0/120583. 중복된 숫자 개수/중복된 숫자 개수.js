function solution(array, n){
      let count = 0;
      for(i of array){
        if(i==n) count+=1
      }
      return count
    }