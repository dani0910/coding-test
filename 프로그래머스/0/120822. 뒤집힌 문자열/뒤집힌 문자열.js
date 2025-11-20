function solution(my_string){
      let reverse = ""
      for(i=my_string.length-1; i>=0; i--){
        reverse += my_string[i]
      }
      return reverse
    }