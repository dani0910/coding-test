    function solution(my_string){
      const strArr = [...my_string.toLowerCase()]
      return strArr.sort().join('')
    }