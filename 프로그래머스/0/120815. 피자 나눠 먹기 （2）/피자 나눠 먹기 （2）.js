    function solution(n){
      //n과 6의 최소공배수
      let pizzaPiece = 0
      if(n%6 === 0){
        pizzaPiece = n
      }else if(n%2 === 0){
        pizzaPiece = (n/2) * 2 * 3
      }else if(n%3 === 0){
        pizzaPiece = (n/3) * 2 * 3
      }else{
        pizzaPiece = n * 2 * 3
      }
      return pizzaPiece / 6
    }