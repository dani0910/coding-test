function solution(array){
      array.sort((a,b)=>b-a)
      return array[Math.round((array.length-1)/2)]
    }