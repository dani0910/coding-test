    function solution(num, k) {
      const numStr = num.toString();
      let returnV = 0;
      for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== String(k)) {returnV = -1} 
        else {
          returnV = (Number(i) + 1)
          break
        }
      }
      return returnV
    }