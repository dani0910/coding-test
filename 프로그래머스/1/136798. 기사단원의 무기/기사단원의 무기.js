function solution(number, limit, power) {
    let sum = 0;
    
    for(let i=1; i<=number; i++){
        let factors = [];
        for (let j=1; j<=Math.sqrt(i); j++){
            if(i%j===0){ //j 자신
                factors.push(j);
                if(j != i/j) { //짝 약수
                    factors.push(j);
                }
            }
        };
        sum += factors.length > limit ? power : factors.length;
    }
    return sum;
}