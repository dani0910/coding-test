function solution(n){
      let arr = []
      n=String(n)
      for(i=0; i<n.length; i++){
        arr.push(parseInt(n[i]))
      }   
      return arr.reduce((a,b)=>a+b)
    }