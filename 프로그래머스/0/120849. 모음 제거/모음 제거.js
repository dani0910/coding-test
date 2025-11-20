function solution(my_string){
     let newString = ''
     for(i of my_string){
      if(i!=='a'&& i!=='e'& i!=='i'&& i!=='o'&& i!=='u'){
        newString+=i
      }
     }
     return newString
    }