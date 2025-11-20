function solution(my_string,letter){
      let newString = ""
      for(i of my_string){
        if(i !== letter){
          newString += i
        }
      }
      return newString
    }