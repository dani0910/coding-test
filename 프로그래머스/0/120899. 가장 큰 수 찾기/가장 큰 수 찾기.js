function solution(array){
      const maxV =  Math.max(...array)
      return [maxV, array.indexOf(maxV)]
    }