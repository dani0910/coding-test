 function solution(numbers){
      numbers.sort((a,b)=>b-a)
      let value = numbers[0] * numbers[1]
      let value2 = numbers[numbers.length-1] * numbers[numbers.length-2]
      return value > value2 ? value : value2
    }