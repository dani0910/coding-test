    function solution(slice, n){
      if (slice >= n) {
        return 1
      }else if(slice < n){
        return Math.ceil(n/slice)
      }
    }