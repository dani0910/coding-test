function solution(num_list){
      let evenCount = 0;
      let oddCount = 0;
      for(i=0; i<num_list.length; i++){
        num_list[i]%2==0 ? evenCount+=1 : oddCount += 1
      }
      return [evenCount , oddCount]
    }