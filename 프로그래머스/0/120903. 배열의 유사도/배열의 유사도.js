function solution(s1, s2){
      let count = 0
      for(i of s1){
        for(j of s2){
          if (i==j) count+=1
        }
      }
      return count
    }