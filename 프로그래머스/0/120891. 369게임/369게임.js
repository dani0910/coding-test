    function solution(order){
      const stringNum = order.toString()
      let crap = 0
      for(let i=0; i<stringNum.length; i++){
        if(stringNum[i] == 3 || stringNum[i] ==6 || stringNum[i]==9){
          crap += 1
        }
      }
      return crap
    }