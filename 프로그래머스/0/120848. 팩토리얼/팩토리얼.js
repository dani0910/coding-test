function solution(n){
      let p = 1;
      for(let i=1; i<=n; i++){
        p *= i
        if(p>=n) {
          if(p===n){
            return i
          }
          return i-1
      }
    }
  }