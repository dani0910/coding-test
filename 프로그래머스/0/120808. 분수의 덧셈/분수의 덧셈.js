function solution(number1, denom1, number2, denom2) {
    let result = [];
    const number = number1 * denom2 + number2 * denom1;
    const denom = denom1 * denom2;

    result.push(number, denom);

    //기약분수 만들기
    let gcd = [];
    let flag = false;
    for (let i = 2; i <= Math.max(...result); i++) {
        if (result[0] % i === 0 && result[1] % i === 0) {
            // console.log("공약수",i);
            flag = true;
            gcd.push(i);
        }
    }
    
    return flag ? result.map(v => v / Math.max(...gcd)) : result;

}