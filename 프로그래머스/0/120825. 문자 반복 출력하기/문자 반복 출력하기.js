 function solution(my_string, n){
      let newString = ''
      // for(i of my_string){
      //   newString += i.repeat(n)
      // }
      for(i of my_string){
          for(j=1; j<=n; j++){
              newString += i
          }
      }
      return newString
    }