function solution(my_string){
      const matches = my_string.match(/[0-9]/g)
      let sum = 0
      for(let i of matches){
        sum+=Number(i)
      }
      return sum
    }