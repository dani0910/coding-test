function solution(n, numlist){
      let newList = []
      for(i of numlist){
        if(i % n == 0){
          newList.push(i)
        }
      }
      return newList
    }