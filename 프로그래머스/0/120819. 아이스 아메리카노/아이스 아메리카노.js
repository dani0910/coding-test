function solution(money){
      let coffee = Math.floor(money/5500)
      let changeMoney = money - coffee*5500
      return [coffee, changeMoney] 
    }