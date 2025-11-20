function solution(n,k){
      let lambValue = 12000 * n
      let coke = 2000 * k
      let sumValue = lambValue + coke - Math.trunc(n/10)*2000

      return sumValue
    }